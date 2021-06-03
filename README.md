# Record Pool Monorepo - Universal UI PoC

This is a proof of concept using Radix UI primitives on iOS, Android and Web with
Expo and Next.js 🎉

Made this as a proposal to create universal UI primitives and components based
on Radix UI that works with Expo by using React Native for Web.

The app is based on code samples from [Record Pool](https://recordpool.app),
a side project kickstarted during Expo Jam (a week of dogfooding at Expo).

Bottom sheet menu on mobile:

<img width="250" alt="Screenshot 2021-06-03 at 07 41 16" src="https://user-images.githubusercontent.com/10477267/120607703-b94a1580-c450-11eb-9cdc-fc53d7231f03.png">

Dropdown menu on desktop:

<img width="500" alt="Screenshot 2021-06-03 at 07 42 23" src="https://user-images.githubusercontent.com/10477267/120607696-b6e7bb80-c450-11eb-92b6-9a4803cc0e09.png">

## App

> Code shared between iOS, Android and Web

`cd packages/app`

The interesting stuff is located at:

`packages/app/components/record`
`packages/app/design-system/menu`
`packages/app/design-system/bottom-sheet`

## Expo + Next.js

> App entrypoints and navigation / routing

Expo entrypoint: `App.tsx`

`cd packages/expo-next`

`yarn start:expo` to start iOS and Android app with Expo

Next.js entrypoint: `src/pages/_app.tsx`

`cd packages/expo-next`

`yarn dev` to start web app

## Radix

> Custom Radix UI components using React Native for Web and React Native Bottom Sheet

`cd packages/radix`

### Context Menu

Trigger on desktop:

- Right-click on record

`packages/radix/context-menu/src/ContextMenu.tsx`

```diff
diff --git a/packages/react/context-menu/src/ContextMenu.tsx b/packages/react/context-menu/src/ContextMenu.tsx
index f5c83ab..674b0c8 100644
--- a/packages/react/context-menu/src/ContextMenu.tsx
+++ b/packages/react/context-menu/src/ContextMenu.tsx
@@ -1,4 +1,5 @@
 import * as React from 'react';
+import { Platform, View } from 'react-native';
 import { composeEventHandlers } from '@radix-ui/primitive';
 import { createContext } from '@radix-ui/react-context';
 import { Primitive, extendPrimitive } from '@radix-ui/react-primitive';
@@ -53,7 +54,7 @@ ContextMenu.displayName = CONTEXT_MENU_NAME;
  * -----------------------------------------------------------------------------------------------*/

 const TRIGGER_NAME = 'ContextMenuTrigger';
-const TRIGGER_DEFAULT_TAG = 'span';
+const TRIGGER_DEFAULT_TAG = Platform.OS === 'web' ? 'span' : View;

 type ContextMenuTriggerOwnProps = Polymorphic.OwnProps<typeof Primitive>;
 type ContextMenuTriggerPrimitive = Polymorphic.ForwardRefComponent<
```

### Dropdown Menu (+ Bottom Sheet Menu)

Trigger on desktop:

- Click on menu vertical

Trigger on mobile:

- Press on menu vertical
- Long-press on record

`packages/radix/dropdown-menu/src/DropdownMenu.tsx`

```diff
diff --git a/packages/react/dropdown-menu/src/DropdownMenu.tsx b/packages/react/dropdown-menu/src/DropdownMenu.tsx
index 47a2c55..ef20902 100644
--- a/packages/react/dropdown-menu/src/DropdownMenu.tsx
+++ b/packages/react/dropdown-menu/src/DropdownMenu.tsx
@@ -1,4 +1,5 @@
 import * as React from 'react';
+import { Platform, View, Modal } from 'react-native';
 import { composeEventHandlers } from '@radix-ui/primitive';
 import { useComposedRefs } from '@radix-ui/react-compose-refs';
 import { createContext } from '@radix-ui/react-context';
@@ -6,6 +7,7 @@ import { useControllableState } from '@radix-ui/react-use-controllable-state';
 import { extendPrimitive } from '@radix-ui/react-primitive';
 import * as MenuPrimitive from '@radix-ui/react-menu';
 import { useId } from '@radix-ui/react-id';
+import BottomSheet from '@gorhom/bottom-sheet';

 import type * as Polymorphic from '@radix-ui/react-polymorphic';

@@ -64,7 +66,7 @@ DropdownMenu.displayName = DROPDOWN_MENU_NAME;
  * -----------------------------------------------------------------------------------------------*/

 const TRIGGER_NAME = 'DropdownMenuTrigger';
-const TRIGGER_DEFAULT_TAG = 'button';
+const TRIGGER_DEFAULT_TAG = Platform.OS === 'web' ? 'button' : View;

 type DropdownMenuTriggerOwnProps = Omit<
   Polymorphic.OwnProps<typeof MenuPrimitive.Anchor>,
@@ -134,35 +136,70 @@ const DropdownMenuContent = React.forwardRef((props, forwardedRef) => {
     ...contentProps
   } = props;
   const context = useDropdownMenuContext(CONTENT_NAME);
+  const bottomSheetRef = React.useRef<BottomSheet>(null);
+  const handleSheetChanges = React.useCallback(
+    (index: number) => {
+      if (index === -1) {
+        context.onOpenChange(false);
+      }
+    },
+    [context]
+  );
+
+  if (Platform.OS === 'web') {
+    return (
+      <MenuPrimitive.Content
+        id={context.contentId}
+        {...contentProps}
+        ref={forwardedRef}
+        disableOutsidePointerEvents={disableOutsidePointerEvents}
+        disableOutsideScroll={disableOutsideScroll}
+        portalled={portalled}
+        style={{
+          ...props.style,
+          // re-namespace exposed content custom property
+          ['--radix-dropdown-menu-content-transform-origin' as any]: 'var(--radix-popper-transform-origin)',
+        }}
+        trapFocus
+        onCloseAutoFocus={composeEventHandlers(onCloseAutoFocus, (event) => {
+          event.preventDefault();
+          context.triggerRef.current?.focus();
+        })}
+        onPointerDownOutside={composeEventHandlers(
+          props.onPointerDownOutside,
+          (event) => {
+            const targetIsTrigger = context.triggerRef.current?.contains(
+              event.target as HTMLElement
+            );
+            // prevent dismissing when clicking the trigger
+            // as it's already setup to close, otherwise it would close and immediately open.
+            if (targetIsTrigger) event.preventDefault();
+          },
+          { checkForDefaultPrevented: false }
+        )}
+      />
+    );
+  }
+
   return (
-    <MenuPrimitive.Content
-      id={context.contentId}
-      {...contentProps}
-      ref={forwardedRef}
-      disableOutsidePointerEvents={disableOutsidePointerEvents}
-      disableOutsideScroll={disableOutsideScroll}
-      portalled={portalled}
-      style={{
-        ...props.style,
-        // re-namespace exposed content custom property
-        ['--radix-dropdown-menu-content-transform-origin' as any]: 'var(--radix-popper-transform-origin)',
-      }}
-      trapFocus
-      onCloseAutoFocus={composeEventHandlers(onCloseAutoFocus, (event) => {
-        event.preventDefault();
-        context.triggerRef.current?.focus();
-      })}
-      onPointerDownOutside={composeEventHandlers(
-        props.onPointerDownOutside,
-        (event) => {
-          const targetIsTrigger = context.triggerRef.current?.contains(event.target as HTMLElement);
-          // prevent dismissing when clicking the trigger
-          // as it's already setup to close, otherwise it would close and immediately open.
-          if (targetIsTrigger) event.preventDefault();
-        },
-        { checkForDefaultPrevented: false }
-      )}
-    />
+    <View style={{ flex: 1 }}>
+      <Modal
+        animationType="none"
+        transparent={true}
+        visible={context.open}
+        onRequestClose={() => {
+          context.onOpenChange(!context.open);
+        }}
+      >
+        <BottomSheet
+          {...contentProps}
+          ref={bottomSheetRef}
+          animateOnMount={true}
+          enablePanDownToClose={true}
+          onChange={handleSheetChanges}
+        />
+      </Modal>
+    </View>
   );
 }) as DropdownMenuContentPrimitive;
```

### Menu

`packages/radix/menu/src/Menu.tsx`

```diff
diff --git a/packages/react/menu/src/Menu.tsx b/packages/react/menu/src/Menu.tsx
index 005ba42..b3f60d0 100644
--- a/packages/react/menu/src/Menu.tsx
+++ b/packages/react/menu/src/Menu.tsx
@@ -1,4 +1,5 @@
 import * as React from 'react';
+import { Platform, View } from 'react-native';
 import { RemoveScroll } from 'react-remove-scroll';
 import { hideOthers } from 'aria-hidden';
 import { composeEventHandlers } from '@radix-ui/primitive';
@@ -396,6 +397,18 @@ const MenuItem = React.forwardRef((props, forwardedRef) => {

 MenuItem.displayName = ITEM_NAME;

+/* -------------------------------------------------------------------------------------------------
+ * MenuItemNative
+ * -----------------------------------------------------------------------------------------------*/
+
+const MenuItemNative = React.forwardRef((props, forwardedRef) => {
+  const { ...itemProps } = props;
+
+  return <View {...itemProps} ref={forwardedRef} />;
+}) as MenuItemPrimitive;
+
+MenuItemNative.displayName = ITEM_NAME;
+
 /* -------------------------------------------------------------------------------------------------
  * MenuCheckboxItem
  * -----------------------------------------------------------------------------------------------*/
@@ -594,7 +607,7 @@ const Anchor = MenuAnchor;
 const Content = MenuContent;
 const Group = MenuGroup;
 const Label = MenuLabel;
-const Item = MenuItem;
+const Item = Platform.OS === 'web' ? MenuItem : MenuItemNative;
 const CheckboxItem = MenuCheckboxItem;
 const RadioGroup = MenuRadioGroup;
 const RadioItem = MenuRadioItem;
```

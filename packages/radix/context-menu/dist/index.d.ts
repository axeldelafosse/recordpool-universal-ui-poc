import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";
import * as MenuPrimitive from "@radix-ui/react-menu";
import * as Polymorphic from "@radix-ui/react-polymorphic";
export const ContextMenu: React.FC<{
    onOpenChange?(open: boolean): void;
}>;
declare const TRIGGER_DEFAULT_TAG: any;
type ContextMenuTriggerOwnProps = Polymorphic.OwnProps<typeof Primitive>;
export type ContextMenuTriggerPrimitive = Polymorphic.ForwardRefComponent<typeof TRIGGER_DEFAULT_TAG, ContextMenuTriggerOwnProps>;
export const ContextMenuTrigger: ContextMenuTriggerPrimitive;
type ContextMenuContentOwnProps = Polymorphic.Merge<Omit<Polymorphic.OwnProps<typeof MenuPrimitive.Content>, 'trapFocus' | 'disableOutsideScroll' | 'portalled' | 'onOpenAutoFocus' | 'side' | 'sideOffset' | 'align' | 'alignOffset'>, {
    offset?: number;
}>;
export type ContextMenuContentPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof MenuPrimitive.Content>, ContextMenuContentOwnProps>;
export const ContextMenuContent: ContextMenuContentPrimitive;
export const ContextMenuGroup: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const ContextMenuLabel: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const ContextMenuItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuItemPrimitive, "div">;
export const ContextMenuCheckboxItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuCheckboxItemPrimitive, "div">;
export const ContextMenuRadioGroup: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuRadioGroupPrimitive, "div">;
export const ContextMenuRadioItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuRadioItemPrimitive, "div">;
export const ContextMenuItemIndicator: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuItemIndicatorPrimitive, "span">;
export const ContextMenuSeparator: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const Root: React.FC<{
    onOpenChange?(open: boolean): void;
}>;
export const Trigger: ContextMenuTriggerPrimitive;
export const Content: ContextMenuContentPrimitive;
export const Group: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const Label: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const Item: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuItemPrimitive, "div">;
export const CheckboxItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuCheckboxItemPrimitive, "div">;
export const RadioGroup: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuRadioGroupPrimitive, "div">;
export const RadioItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuRadioItemPrimitive, "div">;
export const ItemIndicator: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuItemIndicatorPrimitive, "span">;
export const Separator: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;

//# sourceMappingURL=index.d.ts.map

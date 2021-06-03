import * as React from "react";
import { DismissableLayer } from "@radix-ui/react-dismissable-layer";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { Primitive } from "@radix-ui/react-primitive";
import * as PopperPrimitive from "@radix-ui/react-popper";
import { RovingFocusGroup, RovingFocusItem } from "@radix-ui/react-roving-focus";
import * as Polymorphic from "@radix-ui/react-polymorphic";
type MenuOwnProps = {
    open?: boolean;
    onOpenChange?(open: boolean): void;
};
export const Menu: React.FC<MenuOwnProps>;
type MenuContentOwnProps = Polymorphic.Merge<Polymorphic.OwnProps<typeof MenuContentImpl>, {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}>;
export type MenuContentPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof MenuContentImpl>, MenuContentOwnProps>;
export const MenuContent: MenuContentPrimitive;
type FocusScopeOwnProps = Polymorphic.OwnProps<typeof FocusScope>;
type DismissableLayerOwnProps = Polymorphic.OwnProps<typeof DismissableLayer>;
type RovingFocusGroupOwnProps = Polymorphic.OwnProps<typeof RovingFocusGroup>;
type MenuContentImplOwnProps = Polymorphic.Merge<Polymorphic.OwnProps<typeof PopperPrimitive.Content>, Omit<DismissableLayerOwnProps, 'onDismiss'> & {
    /**
     * Whether focus should be trapped within the `MenuContent`
     * (default: false)
     */
    trapFocus?: FocusScopeOwnProps['trapped'];
    /**
     * Event handler called when auto-focusing on open.
     * Can be prevented.
     */
    onOpenAutoFocus?: FocusScopeOwnProps['onMountAutoFocus'];
    /**
     * Event handler called when auto-focusing on close.
     * Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeOwnProps['onUnmountAutoFocus'];
    /**
     * Whether scrolling outside the `MenuContent` should be prevented
     * (default: `false`)
     */
    disableOutsideScroll?: boolean;
    /**
     * The direction of navigation between menu items.
     * @defaultValue ltr
     */
    dir?: RovingFocusGroupOwnProps['dir'];
    /**
     * Whether keyboard navigation should loop around
     * @defaultValue false
     */
    loop?: RovingFocusGroupOwnProps['loop'];
    /**
     * Whether the `MenuContent` should render in a `Portal`
     * (default: `true`)
     */
    portalled?: boolean;
}>;
type MenuContentImplPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof PopperPrimitive.Content>, MenuContentImplOwnProps>;
declare const MenuContentImpl: MenuContentImplPrimitive;
declare const ITEM_DEFAULT_TAG = "div";
type MenuItemOwnProps = Polymorphic.Merge<Omit<Polymorphic.OwnProps<typeof RovingFocusItem>, 'focusable' | 'active'>, {
    disabled?: boolean;
    textValue?: string;
    onSelect?: (event: Event) => void;
}>;
export type MenuItemPrimitive = Polymorphic.ForwardRefComponent<typeof ITEM_DEFAULT_TAG, MenuItemOwnProps>;
export const MenuItem: MenuItemPrimitive;
type MenuCheckboxItemOwnProps = Polymorphic.Merge<Polymorphic.OwnProps<typeof MenuItem>, {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}>;
export type MenuCheckboxItemPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof MenuItem>, MenuCheckboxItemOwnProps>;
export const MenuCheckboxItem: MenuCheckboxItemPrimitive;
type MenuRadioGroupOwnProps = Polymorphic.Merge<Polymorphic.OwnProps<typeof MenuGroup>, {
    value?: string;
    onValueChange?: (value: string) => void;
}>;
export type MenuRadioGroupPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof MenuGroup>, MenuRadioGroupOwnProps>;
export const MenuRadioGroup: MenuRadioGroupPrimitive;
type MenuRadioItemOwnProps = Polymorphic.Merge<Polymorphic.OwnProps<typeof MenuItem>, {
    value: string;
}>;
export type MenuRadioItemPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof MenuItem>, MenuRadioItemOwnProps>;
export const MenuRadioItem: MenuRadioItemPrimitive;
declare const ITEM_INDICATOR_DEFAULT_TAG = "span";
type MenuItemIndicatorOwnProps = Polymorphic.Merge<Polymorphic.OwnProps<typeof Primitive>, {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}>;
export type MenuItemIndicatorPrimitive = Polymorphic.ForwardRefComponent<typeof ITEM_INDICATOR_DEFAULT_TAG, MenuItemIndicatorOwnProps>;
export const MenuItemIndicator: MenuItemIndicatorPrimitive;
export const MenuAnchor: import("@radix-ui/react-primitive").ExtendedPrimitive<PopperPrimitive.PopperAnchorPrimitive, "div">;
export const MenuGroup: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">;
export const MenuLabel: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">;
export const MenuSeparator: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">;
export const MenuArrow: import("@radix-ui/react-primitive").ExtendedPrimitive<PopperPrimitive.PopperArrowPrimitive, "svg">;
export const Root: React.FC<MenuOwnProps>;
export const Anchor: import("@radix-ui/react-primitive").ExtendedPrimitive<PopperPrimitive.PopperAnchorPrimitive, "div">;
export const Content: MenuContentPrimitive;
export const Group: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">;
export const Label: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">;
export const Item: MenuItemPrimitive;
export const CheckboxItem: MenuCheckboxItemPrimitive;
export const RadioGroup: MenuRadioGroupPrimitive;
export const RadioItem: MenuRadioItemPrimitive;
export const ItemIndicator: MenuItemIndicatorPrimitive;
export const Separator: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">;
export const Arrow: import("@radix-ui/react-primitive").ExtendedPrimitive<PopperPrimitive.PopperArrowPrimitive, "svg">;

//# sourceMappingURL=index.d.ts.map

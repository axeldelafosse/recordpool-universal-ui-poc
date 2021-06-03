import * as React from "react";
import * as MenuPrimitive from "@radix-ui/react-menu";
import * as Polymorphic from "@radix-ui/react-polymorphic";
type DropdownMenuOwnProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
};
export const DropdownMenu: React.FC<DropdownMenuOwnProps>;
declare const TRIGGER_DEFAULT_TAG: any;
type DropdownMenuTriggerOwnProps = Omit<Polymorphic.OwnProps<typeof MenuPrimitive.Anchor>, 'virtualRef'>;
export type DropdownMenuTriggerPrimitive = Polymorphic.ForwardRefComponent<typeof TRIGGER_DEFAULT_TAG, DropdownMenuTriggerOwnProps>;
export const DropdownMenuTrigger: DropdownMenuTriggerPrimitive;
type DropdownMenuContentOwnProps = Omit<Polymorphic.OwnProps<typeof MenuPrimitive.Content>, 'trapFocus' | 'onOpenAutoFocus'>;
export type DropdownMenuContentPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof MenuPrimitive.Content>, DropdownMenuContentOwnProps>;
export const DropdownMenuContent: DropdownMenuContentPrimitive;
export const DropdownMenuGroup: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const DropdownMenuLabel: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const DropdownMenuItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuItemPrimitive, "div">;
export const DropdownMenuCheckboxItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuCheckboxItemPrimitive, "div">;
export const DropdownMenuRadioGroup: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuRadioGroupPrimitive, "div">;
export const DropdownMenuRadioItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuRadioItemPrimitive, "div">;
export const DropdownMenuItemIndicator: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuItemIndicatorPrimitive, "span">;
export const DropdownMenuSeparator: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const DropdownMenuArrow: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-popper").PopperArrowPrimitive, "svg">, "svg">;
export const Root: React.FC<DropdownMenuOwnProps>;
export const Trigger: DropdownMenuTriggerPrimitive;
export const Content: DropdownMenuContentPrimitive;
export const Group: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const Label: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const Item: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuItemPrimitive, "div">;
export const CheckboxItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuCheckboxItemPrimitive, "div">;
export const RadioGroup: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuRadioGroupPrimitive, "div">;
export const RadioItem: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuRadioItemPrimitive, "div">;
export const ItemIndicator: import("@radix-ui/react-primitive").ExtendedPrimitive<MenuPrimitive.MenuItemIndicatorPrimitive, "span">;
export const Separator: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").PrimitivePrimitive, "div">, "div">;
export const Arrow: import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-primitive").ExtendedPrimitive<import("@radix-ui/react-popper").PopperArrowPrimitive, "svg">, "svg">;

//# sourceMappingURL=index.d.ts.map

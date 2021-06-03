# Record Pool Monorepo - Universal UI PoC

This is a proof of concept using Radix UI primitives on iOS, Android and Web with
Expo and Next.js 🎉

Made this as a proposal to create universal UI primitives and components based
on Radix UI that works with Expo by using React Native for Web.

The app is based on code samples from [Record Pool](https://recordpool.app),
a side project kickstarted during Expo Jam (a week of dogfooding at Expo).

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

`packages/radix/context-menu/src/ContextMenu.tsx`

### Dropdown Menu

`packages/radix/dropdown-menu/src/DropdownMenu.tsx`

### Menu

`packages/radix/menu/src/Menu.tsx`

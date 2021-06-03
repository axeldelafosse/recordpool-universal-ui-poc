import React from 'react';
import { Platform } from 'react-native';
import { Text, View, Pressable } from 'dripsy';

import * as ContextMenu from '@radix-ui/react-context-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function Menu({
  setIsMenuOpen,
  isContextMenu = false
}: {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isContextMenu?: boolean;
}) {
  return (
    <View
      sx={{
        flex: 1,
        backgroundColor: Platform.OS === 'web' ? 'transparent' : 'black'
      }}
    >
      <MenuItem
        title="Add to crate"
        action={() => {
          console.log('Add to crate');
          setIsMenuOpen(false);
        }}
        isContextMenu={isContextMenu}
      />
      <MenuItem
        title="Add to playlist"
        action={() => {
          console.log('Add to playlist');
          setIsMenuOpen(false);
        }}
        isContextMenu={isContextMenu}
      />
      <MenuItem
        title="Share"
        action={() => {
          console.log('Share');
          setIsMenuOpen(false);
        }}
        isContextMenu={isContextMenu}
      />
    </View>
  );
}

function MenuItem({ action, title, isContextMenu = false }) {
  const Menu = isContextMenu ? ContextMenu : DropdownMenu;

  return (
    <Pressable onPress={action}>
      {({ hovered }) => (
        <Menu.Item
          onSelect={action}
          style={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            cursor: 'pointer',
            backgroundColor: hovered ? '#2C2C2C' : 'transparent'
          }}
        >
          <Text sx={{ color: 'white' }}>{title}</Text>
        </Menu.Item>
      )}
    </Pressable>
  );
}

export const menuStyle = {
  minWidth: 130,
  backgroundColor: '#212121',
  borderRadius: 2,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  paddingTop: 8,
  paddingBottom: 8
};

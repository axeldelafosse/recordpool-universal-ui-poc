import React from 'react';
import { View } from 'dripsy';

export function customHandle() {
  return (
    <View
      sx={{
        height: 24,
        backgroundColor: 'black',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View
        sx={{
          width: 20,
          height: 3,
          backgroundColor: 'white',
          borderRadius: 42
        }}
      />
    </View>
  );
}

export const bottomSheetModalStyle = {
  backgroundColor: 'black',
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: -12
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 16
};

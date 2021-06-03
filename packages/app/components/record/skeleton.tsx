import React from 'react';
import { View } from 'dripsy';
import { MotiView } from '@motify/components';
import { Skeleton } from '@motify/skeleton';

import { RECORD_HEIGHT } from './record';

const Spacer = ({ height = 16 }) => <View style={{ height }} />;

export function RecordSkeleton() {
  return (
    <MotiView>
      <View
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          height: RECORD_HEIGHT,
          maxHeight: RECORD_HEIGHT,
          padding: 10,
          backgroundColor: 'black'
        }}
      >
        <Skeleton colorMode="dark" height={50} width={50} radius={4} />

        <View
          sx={{
            marginLeft: 10,
            width: '100%'
          }}
        >
          <Skeleton colorMode="dark" width="70%" height={13} />
          <Spacer height={8} />
          <Skeleton colorMode="dark" width="42%" height={10} />
        </View>
      </View>
    </MotiView>
  );
}

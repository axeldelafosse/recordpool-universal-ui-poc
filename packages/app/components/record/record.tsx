import React, { useState } from 'react';
import {
  Image,
  useWindowDimensions,
  TouchableHighlight,
  Platform
} from 'react-native';
import { styled, Text, View } from 'dripsy';
import useSWRNative from '@nandorojo/swr-react-native';
import useUnmountSignal from 'use-unmount-signal';
import { Feather } from '@expo/vector-icons';

import { getOpenKeyNotationColor } from 'app/utils/open-key';
import { fetchWithRecord } from 'app/utils/fetch';
import type { RecordFragment } from 'app/graphql/fragments/Record.fragment.generated';
import * as ContextMenu from '@radix-ui/react-context-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  bottomSheetModalStyle,
  customHandle
} from 'app/design-system/bottom-sheet';
import { Menu, menuStyle } from 'app/design-system/menu';

export const RECORD_HEIGHT = 70;

const StyledTouchableHighlight = styled(TouchableHighlight)({});

type Props = {
  record: RecordFragment;
  openPlayer: (record: RecordFragment) => void;
  isMovable?: boolean;
  setIsMenuOpen?: (isMenuOpen: boolean) => void;
};

function RecordContent({
  record,
  openPlayer,
  isMovable = false,
  setIsMenuOpen
}: Props) {
  const dimensions = useWindowDimensions();
  const shouldFetch = !record?.id && !record?.bpm;
  const unmountSignal = useUnmountSignal();
  const { data: metadataData, error: metadataError } = useSWRNative(
    ['/api/metadata', record, shouldFetch, unmountSignal],
    fetchWithRecord,
    {
      revalidateOnFocus: false
    }
  );
  record = (metadataData as RecordFragment) ?? record;

  if (metadataError) console.error(metadataError);

  return (
    <TouchableHighlight
      onPress={() => openPlayer(record)}
      onLongPress={() => setIsMenuOpen(true)}
    >
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
        <Image
          source={{ uri: record.image }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 4
          }}
        />

        <View
          sx={{
            marginLeft: 10
          }}
        >
          <Text
            sx={{
              fontSize: 16,
              fontWeight: '600',
              marginBottom: 4,
              color: 'white',
              width: dimensions.width * 0.7
            }}
            numberOfLines={2}
          >
            {record.title}
          </Text>

          <Text sx={{ fontSize: 12, color: 'gray' }}>
            {record.artist}{' '}
            {typeof record.duration === 'string' &&
              record.duration?.includes(':') && <>- {record.duration} </>}
            {record.bpm && <>- {record.bpm} BPM</>}
            {record.openKey && (
              <>
                {' '}
                -{' '}
                <Text
                  sx={{
                    color: getOpenKeyNotationColor(record.openKey) ?? 'gray'
                  }}
                >
                  {record.openKey}
                </Text>
              </>
            )}
          </Text>
        </View>

        {!isMovable && (
          <StyledTouchableHighlight
            sx={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}
            onPress={() => {
              setIsMenuOpen(true);
            }}
          >
            <DropdownMenu.Trigger as={View}>
              <Feather size={20} color="gray" name="more-vertical" />
            </DropdownMenu.Trigger>
          </StyledTouchableHighlight>
        )}
      </View>
    </TouchableHighlight>
  );
}

export function Record(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <DropdownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <RecordContent setIsMenuOpen={setIsMenuOpen} {...props} />

          <DropdownMenu.Content
            style={Platform.OS === 'web' ? menuStyle : bottomSheetModalStyle}
            handleComponent={customHandle}
            snapPoints={['20%']}
          >
            <Menu setIsMenuOpen={setIsMenuOpen} />
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </ContextMenu.Trigger>

      <ContextMenu.Content style={menuStyle}>
        <Menu isContextMenu setIsMenuOpen={setIsMenuOpen} />
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

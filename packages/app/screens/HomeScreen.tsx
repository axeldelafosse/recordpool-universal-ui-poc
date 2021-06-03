import React, { useState } from 'react';
import { TextInput, Platform } from 'react-native';
import { styled, View, Text } from 'dripsy';
import useSWRNative from '@nandorojo/swr-react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useUnmountSignal from 'use-unmount-signal';

import { Records } from 'app/components/records';
import { useDebounce } from 'app/hooks/use-debounce';
import { fetchWithSearch } from 'app/utils/fetch';

const StyledTextInput = styled(TextInput)({
  height: 40,
  color: 'white',
  backgroundColor: '#666666',
  borderRadius: 18,
  paddingX: 8,
  margin: 8,
  fontFamily: 'Arial Rounded MT Std',
  paddingTop: 4
});

export default function HomeScreen() {
  const [search, setSearch] = useState('the man with the red face');
  const debouncedSearch = useDebounce(search, 500);
  const unmountSignal = useUnmountSignal();
  const { data, error } = useSWRNative(
    ['/api/search', debouncedSearch, unmountSignal],
    fetchWithSearch,
    {
      revalidateOnFocus: false,
      dedupingInterval: 2000
    }
  );

  if (error) {
    console.error(error);

    return <Text sx={{ color: 'white' }}>Error</Text>;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StyledTextInput
          onChangeText={(text) => setSearch(text)}
          value={search}
          autoCorrect={false}
          clearButtonMode="always"
          keyboardAppearance="dark"
          returnKeyType="search"
        />
        <Records records={data} canDragToReorder={false} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

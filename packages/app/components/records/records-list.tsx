import React from 'react';
import { FlatList } from 'react-native';

import { Record } from 'app/components/record';
import type { RecordFragment } from 'app/graphql/fragments/Record.fragment.generated';

type Props = {
  records: RecordFragment[] | null;
  canDragToReorder?: boolean;
  openPlayer?: (record: RecordFragment) => void;
  isInModal?: boolean;
};

export function RecordsList({
  records,
  canDragToReorder = true,
  openPlayer,
  isInModal = false
}: Props) {
  return (
    <FlatList
      data={records}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item: record }) => (
        <Record
          key={record.youtubeId}
          record={record}
          openPlayer={openPlayer}
        />
      )}
    />
  );
}

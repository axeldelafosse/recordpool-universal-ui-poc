import React, { useCallback } from 'react';

import { RecordsList } from 'app/components/records/records-list';
import type { RecordFragment } from 'app/graphql/fragments/Record.fragment.generated';
import { RecordSkeletons } from 'app/components/records/skeletons';

type Props = {
  records: RecordFragment[] | null;
  canDragToReorder?: boolean;
};

export function Records({ records, canDragToReorder }: Props) {
  const openPlayer = useCallback((record) => {}, []);

  return (
    <>
      {!records ? (
        <RecordSkeletons />
      ) : (
        <RecordsList
          records={records}
          canDragToReorder={canDragToReorder}
          openPlayer={openPlayer}
        />
      )}
    </>
  );
}

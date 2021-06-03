import React from 'react';
import { RecordSkeleton } from 'app/components/record';

export function RecordSkeletons() {
  return (
    <>
      {[1, 2, 3].map((key) => {
        return <RecordSkeleton key={key} />;
      })}
    </>
  );
}

import type { RecordFragment } from 'app/graphql/fragments/Record.fragment.generated';

const API = 'https://recordpool.app';

export const fetchWithRecord = async (
  url: string,
  record: RecordFragment,
  shouldFetch: boolean,
  unmountSignal: AbortSignal
) => {
  if (!shouldFetch) return null;

  if (record) {
    try {
      const response = await fetch(`${API}${url}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ record }),
        signal: unmountSignal
      });
      return await response.json();
    } catch (error) {}
  }
};

export const fetchWithSearch = async (url: string, search: string) => {
  if (search && search !== '') {
    try {
      const response = await fetch(`${API}${url}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search })
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
};

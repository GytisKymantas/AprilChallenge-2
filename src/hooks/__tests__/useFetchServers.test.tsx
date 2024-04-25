import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useFetchServers } from '../useFetchServers';

describe('useFetchServers', () => {
  it('useFetchServers returns work properly', () => {
    const { result } = renderHook(() => useFetchServers());
    const testServer = [{ name: 'Server A', distance: '1' }];

    const { servers, serversLoaded, handleSetServer } = result.current;

    expect(result.current.servers).toEqual([]);
    expect(serversLoaded).toBe(false);

    act(() => {
      handleSetServer(testServer);
    });
    expect(servers).toEqual(testServer);
  });
});

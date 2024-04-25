import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useFetchServers } from '../useFetchServers';

describe('useFetchServers', () => {
  it('useFetchServers returns work properly', () => {
    const { result } = renderHook(() => useFetchServers());
    const testServer = [{ name: 'Server A', distance: '1' }];

    expect(result.current.servers).toEqual([]);
    expect(result.current.serversLoaded).toBe(false);

    act(() => {
      result.current.handleSetServer(testServer);
    });

    expect(result.current.servers).toEqual(testServer);
  });
});

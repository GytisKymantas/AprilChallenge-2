import { act, renderHook } from '@testing-library/react';
import { useSortServers } from '../useSortServers';

describe('useSortServers', () => {
  it('useSortServers returns work properly without crashing', () => {
    const servers = [
      { name: 'Server A', distance: '1' },
      { name: 'Server B', distance: '4' },
    ];
    const setServers = jest.fn();
    const initialConfig = { name: null, distance: null };

    const { result } = renderHook(() =>
      useSortServers(servers, setServers, initialConfig)
    );

    const { sortConfig, handleSortAction } = result.current;
    expect(sortConfig).toEqual(initialConfig);

    act(() => {
      handleSortAction('distance');
    });

    expect(result.current.sortConfig).toEqual({
      name: null,
      distance: 'descending',
    });

    act(() => {
      handleSortAction('name');
    });

    expect(result.current.sortConfig).toEqual({
      name: 'descending',
      distance: null,
    });

    expect(setServers).toHaveBeenCalledWith(servers);
  });
});

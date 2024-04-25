// @ts-ignore

import { act, renderHook } from '@testing-library/react';
import store from '../../store/store';

import { useUserAuthentication } from '../useUserAuthentication';
import { Provider } from 'react-redux';
import { getFromLocalStorage } from '../../utils/storage';

jest.mock('../../utils/storage', () => ({
  getFromLocalStorage: jest.fn(() => 'faketoken'),
}));

describe('useUserAuthentication', () => {
  it('useUserAuthentication returns work without crashing', () => {
    const { result } = renderHook(() => useUserAuthentication(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    const { isAuthenticated } = result.current;
    expect(isAuthenticated).toBe(false);
  });

  it('updates isAuthenticated state', () => {
    const { result } = renderHook(() => useUserAuthentication(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    const { isAuthenticated, updateUserAuthentication } = result.current;

    act(() => {
      updateUserAuthentication(true);
    });
    expect(isAuthenticated).toBe(true);

    act(() => {
      updateUserAuthentication(false);
    });
    expect(isAuthenticated).toBe(false);
  });

  it('retrieves token from local storage', () => {
    const { result } = renderHook(() => useUserAuthentication(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const { isAuthenticated } = result.current;

    expect(getFromLocalStorage).toHaveBeenCalledWith('token');
    expect(isAuthenticated).toBe(true);
  });
});

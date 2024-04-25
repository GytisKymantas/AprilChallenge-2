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
    expect(isAuthenticated).toBe(true);
  });

  it('updates isAuthenticated state to false', () => {
    const { result } = renderHook(() => useUserAuthentication(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const { updateUserAuthentication } = result.current;
    act(() => {
      updateUserAuthentication(false);
    });
    // I am destructuring isAuthenticated outside of act to get the updated value
    const { isAuthenticated } = result.current;

    expect(isAuthenticated).toBe(false);
  });

  it('updates isAuthenticated state to true', () => {
    const { result } = renderHook(() => useUserAuthentication(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });
    const { updateUserAuthentication } = result.current;
    act(() => {
      updateUserAuthentication(true);
    });

    // I am destructuring isAuthenticated outside of act to get the updated value
    const { isAuthenticated } = result.current;

    expect(isAuthenticated).toBe(true);
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

import { act, renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useRedirect } from '../useRedirect';

describe('useRedirect', () => {
  it('useRedirect truthy values', () => {
    const { result } = renderHook(() => useRedirect(), {
      wrapper: MemoryRouter,
    });

    const { current } = result;

    const homeRoute = current.toHome();
    const loginRoute = current.toLogin();
    const servesrRoute = current.toServers();

    expect(homeRoute).toBeTruthy();
    expect(loginRoute).toBeTruthy();
    expect(servesrRoute).toBeTruthy();
  });
});

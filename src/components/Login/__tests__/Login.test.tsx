import {
  render,
  fireEvent,
  waitFor,
  renderHook,
  act,
} from '@testing-library/react';
import { Login } from '../Login';
import { createTesonetClient } from '../../../config/tesonetClient';
import { MemoryRouter } from 'react-router-dom';
import { useRedirect } from '../../../hooks/useRedirect';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import { useUserAuthentication } from '../../../hooks/useUserAuthentication';

jest.mock('../../../config/tesonetClient', () => ({
  createTesonetClient: jest.fn(),
}));

const mockedCreateTesonetClient = createTesonetClient as jest.MockedFunction<
  typeof createTesonetClient
>;

describe('Login component', () => {
  it('submits login form with valid credentials', async () => {
    const { result } = renderHook(() => useRedirect(), {
      wrapper: MemoryRouter,
    });

    const { result: userAuth } = renderHook(() => useUserAuthentication(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const mockToken = 'mocked-token';
    const mockGetToken = jest.fn().mockResolvedValue(mockToken);

    mockedCreateTesonetClient.mockReturnValue({
      getToken: mockGetToken,
      getServers: jest.fn(),
    });

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const usernameInput = getByPlaceholderText('username') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('password') as HTMLInputElement;

    fireEvent.change(usernameInput, {
      target: { value: 'testUser' },
    });

    fireEvent.change(passwordInput, {
      target: { value: 'testPassword' },
    });

    expect(usernameInput.value).toBe('testUser');
    expect(passwordInput.value).toBe('testPassword');
    act(() => {
      fireEvent.click(getByText('Sign in'));
    });

    await waitFor(() => {
      expect(result.current.toHome()).toBe(true);

      act(() => {
        userAuth.current.updateUserAuthentication(true);
      });

      expect(userAuth.current.isAuthenticated).toBe(true);
    });
  });
});

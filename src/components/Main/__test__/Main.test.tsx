import { render } from '@testing-library/react';
import { useUserAuthentication } from '../../../hooks/useUserAuthentication';
import { Messages } from '../../../utils/constants';
import { Main } from '../Main';

jest.mock('../../../hooks/useUserAuthentication');

const mockUseUserAuthentication = useUserAuthentication as jest.Mock;
describe('Main component', () => {
  it('renders logged in message when user is authenticated', () => {
    mockUseUserAuthentication.mockReturnValue({
      isAuthenticated: true,
    });
    const { getByText } = render(<Main />);

    // Assert that the logged in message is rendered
    expect(getByText(Messages.LOGGED_IN_MESSAGE)).toBeInTheDocument();
  });

  it('renders logged in message when user is authenticated', () => {
    mockUseUserAuthentication.mockReturnValue({
      isAuthenticated: false,
    });

    const { getByText } = render(<Main />);

    expect(getByText(Messages.LOGGED_OUT_MESSAGE)).toBeInTheDocument();
  });
});

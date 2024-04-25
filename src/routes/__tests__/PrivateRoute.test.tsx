import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProtectedRoute } from '../PrivateRoute';

describe('ProtectedRoute component', () => {
  it('renders children when permission is true', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProtectedRoute permission={true}>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    );

    expect(getByText('Protected Content')).toBeInTheDocument();
  });

  it('does not render children when permission is false', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <ProtectedRoute permission={false}>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    );

    expect(queryByText('Protected Content')).toBeNull();
  });
});

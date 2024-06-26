import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Main } from './components/Main/Main';
import { NavigationBar } from './components/Navigation/Navigation';
import { ServerListPage } from './components/ServerList/ServerListPage';
import { useUserAuthentication } from './hooks/useUserAuthentication';
import { ProtectedRoute } from './routes/PrivateRoute';
import { ROUTES } from './utils/constants';

const App = () => {
  const { isAuthenticated } = useUserAuthentication();
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />{' '}
        <Routes>
          <Route path={ROUTES.HOME} element={<Main />} />
          <Route
            path={ROUTES.LOGIN}
            element={
              <ProtectedRoute
                permission={!isAuthenticated}
                redirectPath={ROUTES.HOME}
              >
                <Login />
              </ProtectedRoute>
            }
          />

          <Route
            path={ROUTES.SERVERS}
            element={
              <ProtectedRoute
                permission={isAuthenticated}
                redirectPath={ROUTES.HOME}
              >
                <ServerListPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

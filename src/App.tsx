import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Main } from './components/Main/Main';
import { ServerList } from './components/SeverList/ServerList';
import useAuthenticated from './hooks/useAuthenticated';
import { ProtectedRoute } from './routes/PrivateRoute';
import { ROUTES } from './utils/types';

const App = () => {
  const { isAuthenticated } = useAuthenticated();
  console.log(isAuthenticated, 'is auth');
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path={ROUTES.HOME} Component={Main} />
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
                <ServerList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

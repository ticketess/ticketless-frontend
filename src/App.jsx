import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import AdminPage from "./pages/admin";
import Auth from "./pages/Auth";
import AdminAuth from "./pages/admin/Auth";
import Home from "./pages/Home";
import routes from "./routes";
import AdminAuthLayout from "./layouts/AdminAuthLayout";
import { useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const pages = [
  {
    exact: true,
    path: routes.login,
    component: Auth,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.adminLogin,
    component: AdminAuth,
    layout: PublicLayout,
  },
  {
    exact: true,
    path: routes.home,
    component: Home,
    layout: PublicLayout,
  },
  {
    exact: false,
    path: routes.admin,
    component: AdminPage,
    layout: AdminAuthLayout,
  },
];

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {pages.map(
          ({ exact, path, component: Component, layout: Layout }, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={(props) => (
                <Layout history={props.history}>
                  <Component {...props} />
                </Layout>
              )}
            />
          )
        )}
      </Switch>
    </Router>
  );
};

export default App;

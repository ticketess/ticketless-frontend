import { Route, Switch } from "react-router-dom";
import routes from "../../routes";
import Dashboard from "./Dashboard";
import Orders from "./Orders";

const AdminPage = () => {
  return (
    <Switch>
      <Route exact path={routes.admin} component={Dashboard} />
      <Route exact path={routes.orders} component={Orders} />
    </Switch>
  );
};

export default AdminPage;

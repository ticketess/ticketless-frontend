import routes from "../../routes";

const Dashboard = ({ history }) => {
  return <p onClick={() => history.push(routes.orders)}>Hello There ! it's dashboard</p>;
};

export default Dashboard;

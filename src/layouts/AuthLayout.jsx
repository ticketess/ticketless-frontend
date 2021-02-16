import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import routes from "../routes";

const AuthLayout = (props) => {
  const getUser = async () => {
    if (!Cookies.get("_token")) {
      return props.history.push(routes.adminLogin);
    }

    try {
      let response = await axios.post(`${routes.baseUrl}/user`);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(props);

  useEffect(() => {
    getUser();
  }, []);
  return <>{props.children}</>;
};

export default AuthLayout;

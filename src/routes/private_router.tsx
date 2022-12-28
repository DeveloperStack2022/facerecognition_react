import { Route, Redirect } from "react-router-dom";
import di from "di";
const PrivateRoute = (props: any) => {
  return di.session.verifyToken() ? (
    <Route {...props} />
  ) : (
    <Redirect to="/auth/sign-in/default" />
  );
};

export default PrivateRoute;

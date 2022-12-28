import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";

import UserLayout from "./layouts/Users";
import { ChakraProvider } from "@chakra-ui/react";
//Provider Context
import AuthContextProvider from "contexts/auth_provider";
// theme
import theme from "./theme/theme";

//Redux
import { Provider } from "react-redux";
import { store } from "./store";
import PrivateRoute from "routes/private_router";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <HashRouter>
            <AuthContextProvider>
              <Switch>
                <Route path={`/auth`} component={AuthLayout} />
                <PrivateRoute path={`/admin`} component={AdminLayout} />
                {/* <Route path={`/rtl`} component={RTLLayout} /> */}
                <Route path={`/user`} component={UserLayout} />
                <Redirect from="/" to="/admin" />
              </Switch>
            </AuthContextProvider>
          </HashRouter>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);

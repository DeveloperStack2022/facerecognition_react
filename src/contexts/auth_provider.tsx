import { useState, FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./auth_context";
import di from "di";
type Error = {
  message: string;
  success: boolean;
};

type Props = {
  children: JSX.Element;
};

const ComponentProvider = ({ children }: Props) => {
  const history = useHistory();
  const [IsAuthenticate, setIsAuthenticate] = useState<boolean>(false);
  const [Loading, setLoading] = useState<boolean>(true);
  const [Error, setError] = useState<Error>({ message: "", success: true });

  useEffect(() => {
    function loadStorageSession() {
      let res = di.session.verifyToken();
      setIsAuthenticate(res);
      setLoading(false);
    }
    loadStorageSession();
  }, []);

  async function handleLogin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    let user = { email, password };
    let response = await di.session.login(user);

    if (response?.access_token) {
      di.session.setToke(
        "token",
        `${response.token_type} ${response.access_token}`
      );
      di.session.setToke("token", response.access_token);
      setIsAuthenticate(true);
      setError({
        message: "",
        success: true,
      });
      return history.push("/admin/default");
    }
    setError({ message: response.detail, success: response.success });
  }
  async function handleLogout() {
    di.session.removeToken();
    return setIsAuthenticate(false);
  }

  return (
    <AuthContext.Provider
      value={{
        checkingSession: false,
        isAuthenticated: IsAuthenticate,
        login: handleLogin,
        logout: handleLogout,
        loading: Loading,
        error: Error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default ComponentProvider;

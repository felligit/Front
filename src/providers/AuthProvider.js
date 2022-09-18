import React, { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";
import {
  getAccessTokenApi,
  getRefreshTokenApi,
  refreshAccesTokenApi,
  logout,
} from "../api/auth";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState({
    userjf: null,
    isLoading: true,
  });

  useEffect(() => {
    checkUserLogin(setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

function checkUserLogin(setUser) {
  const accessToken = getAccessTokenApi();
  //console.log(accessToken);

  if (!accessToken) {
    const refreshToken = getRefreshTokenApi();

    if (!refreshToken) {
      logout();
      setUser({
        userjf: null,
        isLoading: false,
      });
    } else {
      refreshAccesTokenApi(refreshToken);
    }
  } else {
    setUser({
      isLoading: false,
      userjf: jwtDecode(accessToken),
    });
  }
}

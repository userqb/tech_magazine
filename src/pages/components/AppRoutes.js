import React from "react";
import { privateRoutes, publicRoutes } from "../../routes/routes";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  const auth = true;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => {
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />;
      })}
      {/* <Navigate to="/main" /> */}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />;
      })}
      {/* <Navigate to="/login" /> */}
    </Routes>
  );
};

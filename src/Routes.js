import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Home } from "./page/home";
import { PediatricForm } from "./page/PediatricForm";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/pediatric-form">
        <PediatricForm />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;

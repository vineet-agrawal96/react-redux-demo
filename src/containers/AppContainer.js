import React from "react";
import {   Route, Switch } from "react-router-dom";
import { App } from "../App"
import { UserForm } from "../pages/UserForm"
import { UsersList } from "../pages/UsersList"

export const AppContainer = () => {
  return (
    <Switch>
            <Route exact path="/" component={UserForm} />
            <Route path="/usersList" component={UsersList} />
            <Route render={() => <App />} />
          </Switch>
  );
};

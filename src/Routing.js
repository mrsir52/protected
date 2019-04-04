import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthenticatedComponent from "./components/AuthenticatedComponent";
import Login from "./components/Login";
import Protected from "./components/Protected"



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/Login" exact component={Login} />
          <AuthenticatedComponent>
            <Route path ="/" exact component={Protected} />
          </AuthenticatedComponent>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

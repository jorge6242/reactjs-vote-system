import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Containers/Dashboard";
import Main from "../Containers/Main";
import Modal from '../Components/Modal';
import SnackBar from "../Components/SnackBar";

export default function Routes() {
  return (
    <Router>
      <Dashboard>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
        <Modal />
        <SnackBar />
      </Dashboard>
    </Router>
  )
}

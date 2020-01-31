import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Containers/Dashboard";
import Main from "../Containers/Main";
import Modal from '../Components/Modal';
import SnackBar from "../Components/SnackBar";
import PastTrials from "../Containers/PastTrials";
import HowItWorks from "../Containers/HowItWorks";

export default function Routes() {
  return (
    <Router>
      <Dashboard>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/past-trials" exact component={PastTrials} />
          <Route path="/how-it-works" exact component={HowItWorks} />
        </Switch>
        <Modal />
        <SnackBar />
      </Dashboard>
    </Router>
  )
}

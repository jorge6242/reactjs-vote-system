import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import "./index.sass";
import LoginForm from "../../Components/LoginForm";
import { login } from "../../Actions/loginActions";

class Login extends Component {

  render() {
    return (
      <Grid container spacing={0} className="login-container">
        <Grid item xs={12} className="login-container__title">
          Login
        </Grid>
        <Grid item xs={12} className="login-container__form">
          <LoginForm handleForm={this.handleForm} />
        </Grid>
      </Grid>
    );
  }
}

const mD = {
  login
};

export default withRouter(
  connect(
    null,
    mD
  )(Login)
);

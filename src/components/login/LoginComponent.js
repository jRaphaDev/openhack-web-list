import React, { Component } from "react";
import { connect } from "react-redux";

class LoginComponent extends Component {}

export default connect(
  state => state,
  dispatch => dispatch
)(LoginComponent);

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Landing from "./Component/Landing";
import Header from "./Component/header"

class App extends Component {
  render() {
    // let routes = (
      
    // );
    return (
      <Fragment>
        <Header/>
        <Landing/>
        
      </Fragment>
    );
  }
}

export default withRouter(App);

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ExercisePage from "./ExercisesPage";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  renderHomePage(){
    return(<p>This is the HomePage</p>);
  }

  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' render={this.renderHomePage} />
                <Route exact path='/create' component={ExercisePage} />
            </Switch>
        </Router>
    );
  }
}
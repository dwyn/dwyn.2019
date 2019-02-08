import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar';
import LandingContainer from './LandingContainer'
import NewPostContainer from './NewPostContainer'
import PostShow from '../components/Post/PostShow';

class App extends Component{
  render () {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch id='routes'>
            <Route exact path="/posts/new" component={NewPostContainer} />
            <Route exact path="/posts/:id" component={PostShow} />
            <Route exact path="/" component={LandingContainer} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
import React, { Component as component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingContainer from './containers/LandingContainer'
import PostContainer from './containers/PostContainer';

export default (
  <BrowserRouter>
    <Switch id='routes'>
      {/* <Route path="/posts/:id" component={ PostContainer } /> */}
      {/* <Route path="/posts/:id" render={routerProps => <PostContainer {...routerProps} posts={this.state.posts} />} /> */}
      
      <Route exact path='/' component={ LandingContainer } />
    </Switch>
  </BrowserRouter>
)
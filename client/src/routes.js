import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import Landing from './containers/Landing'

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={() => loggedIn() ? <Landing /> : <Redirect to="/login" />} />
      <Route path='/signup' component={() => loggedIn() ? <Redirect to="/" /> : <Signup />} />
      <Route path='/login' component={() => loggedIn() ? <Redirect to="/" /> : <Login />} />
      <Route path='/logout' component={() => logout()} />
      <Route path='/posts' component={() => loggedIn() ? <Landing /> : <Redirect to="/login" />} />

      <Route path='/tests' component={() => <div>Testing Path<br /><Link to="/">Back Home</Link></div>} />
    </Switch>
  </BrowserRouter>
)

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
  if (sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/login" />
}





// class App extends Component {
//   render() {

//     return (
//       <div>
//         <Layout>
//           <LandingContainer />
//         </Layout>
//       </div>
//     );
//   }
// }

// export default App;

// const postItems = this.state.posts.map(post => (
//   <div key={post.id}>
//     <h3> {post.title} </h3>
//     <p> {post.body} </p>
//   </div>
// ));
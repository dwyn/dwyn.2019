import React from 'react';
import { connect } from 'react-redux'; //connects components to redux store!

import Aux from '../../hoc/Aux'

const Layout = (props) => (
  <Aux >
    <div> Navbar, Header, Menu, footer(from inside the LayoutContainer) </div>
    <main>
      {props.children}
    </main>
  </Aux>
);



export default Layout;













// class Layout extends Component {
//   componentWillMount() {
//     this.props.fetchPosts(); //fetch request via imported action!
//   }

//   render() {
//     return (
//       <PostPreview />
//       )
//     }
//   }
  
  // const mapStateToProps = (state) => {
  //  posts: state.posts.items
  // }
  
  
  // import classes from './Layout.css';
  // import { fetchPosts } from '../../store/actions/postActions'; //importing fetchPosts action!
  // import PostPreview from '../Post/PostPreview'; //importing PostPreview component!
  // import { App } from '../containers/App'; //importing PostPreview component!
  
  
  // const mapDispatchToProps = 
  // import Aux from '../../hoc/Aux';
  // import Toolbar from '../Navigation/Toolbar/Toolbar';
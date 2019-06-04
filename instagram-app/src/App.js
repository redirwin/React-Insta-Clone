import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component{
  constructor() {
  super();
  this.state = {
    posts: dummyData
  };
}
  
 render() {
  // console.log(this.state.posts);

   return (    
     <div className="App">

     <p>This is the App.</p>
     <PostContainer id={this.state.id} posts={this.state.posts}/>

     </div>
   )
 } 
    
  }

export default App;

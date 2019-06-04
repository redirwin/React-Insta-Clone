import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component{
  constructor() {
  super();
  this.state = {
    posts: dummyData
  };
}
  
 render() {
  console.log(this.state.posts);

   return (    
     <div className="App">

     <p>This is the App.</p>
     <PostContainer posts={this.state.posts}/>

     </div>
   )
 } 
    
  }

export default App;

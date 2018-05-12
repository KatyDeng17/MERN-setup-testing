import React, { Component } from 'react'; 
import axios from 'axios';

class Test extends Component{
  componentDidMount(){
    this.getUserData();
  }
  //requesting data from server and console.log() the data back; 
  async getUserData(){
    const response = await axios.get('http://localhost:9000/user-data');
    console.log('user Data Response:', response); 
  }
  render(){
    return <h1> Test Component</h1> 
  }
}

export default Test;
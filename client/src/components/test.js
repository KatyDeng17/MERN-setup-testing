import React, { Component } from 'react'; 
import axios from 'axios';

class Test extends Component{
  componentDidMount(){
    this.getUserData();
    this.getArticle();
    this. sendData();
  }
  //requesting data from server and console.log() the data back; 
///sending data from front end to back end; 
  async sendData(){
    //demo data:
    const dataToSend = {
      somthing : 'here is something', 
      anothering: 'here is another thing', 
      
    };
    const response = await axios.post('/api/send-data', dataToSend);
    console.log('Data Sent to server:', response);
  }

// requesting data from front to backend; 
  async getUserData(){
    const response = await axios.get('/api/user-data');
    console.log('user Data Response:', response); 
  }


  async getArticle(){
    const response = await axios.get('/api/get-article'); 
    console.log('Article data response', response);
  }
  render(){
    return <h1> Test</h1> 
  }
}

export default Test;

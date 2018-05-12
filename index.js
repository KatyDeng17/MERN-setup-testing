const express = require('express'); 
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 8000;


const app = express(); 

//when doing get
app.use(cors()); 
//when doing POST
app.use(express.json());

//serve everything inside the client folder for React
app.use(express.static(resolve(__dirname, 'client','dist')));



//using .get  creating end points 

//MAKING POST request///////////////
//receiving data from front end; and send it back to front end; 
app.post('/api/send-data',(req,res)=>{
  console.log("data sent: ", req.body);
  res.send({success: true, mirror: req.body }); //for testing after getting the data from client then send right back to the client? 
})

//front end requesting data from back end! 
//MAKING get request /////////////// 
app.get('/api/user-data',(req, res)=>{
  //demo data in back-end!
  const user ={
   name : 'Jim Bob',
   email: 'jimhebob@gmail.com'
 }
  res.send(user);
});


app.get('/api/get-article', (req,res)=>{
  //demo data in back-end!
  const article = {
    title: 'Some Awesome Article',
    author: 'John Walker',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, placeat nesciunt. At quam nulla magni error minus, eius nostrum, nemo voluptatibus laborum id nam, ratione dolore consequuntur? Non, soluta quia.'
  }
   res.send(article);
});




app.get('/', function (req, res){
  res.send ('<h1>something is great!</h1>')
})

///last end point 
app.get('*',(req, res)=>{
  res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
})


app.listen( PORT, function(){
  console.log('Express Server running at localhost! ' + PORT);
} ).on('error', (err)=>{
  console.log('Server Error', err.message); 
  console.log('Do you already have a server running on PORT: ' + PORT +'?')
}); 
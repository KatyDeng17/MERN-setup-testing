const express = require('express'); 
const cors = require('cors');
const PORT = process.env.PORT || 9000;


const app = express(); 


app.use(cors());



//using .get  creating one end point 

app.get('/user-data',(req, res)=>{
  const user ={
   name : 'Jim Bob',
   email: 'jimhebob@gmail.com'
 }
  res.send(user);
});

app.get('/', function (req, res){
  res.send ('<h1>somthing</h1>')
})

app.listen( PORT, function(){
  console.log('Express Server running at localhost! ' + PORT);
} ).on('error', (err)=>{
  console.log('Server Error', err.message); 
  console.log('Do you already have a server running on PORT: ' + PORT +'?')
}); 
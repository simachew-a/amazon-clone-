
const express = require('express');
//const mongoose=require('mongoose');
const User=require('./models/User.js');
const bcrypt = require('bcryptjs');  
const bodyparser=require('body-parser');
const app = express();
const bcryptSalt=bcrypt.genSaltSync(10);
//const cors=require(cors);
app.use(bodyparser.urlencoded({extended: true }));
app.use(express.json());


const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
  app.get( __dirname +'/test', (req,res) => {
    //mongoose.connect(process.env.MONGO_URL);
    res.json('test ok');
  });
  app.get('/test', (req,res) => {
   // mongoose.connect('mongodb+srv://smith:sa43562258@cluster0.bdz0hnh.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true});
    res.json('test ok');
  });
  app.post('/register', async (req,res) => {
   // mongoose.connect('mongodb+srv://smith:sa43562258@cluster0.bdz0hnh.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true});
    const name = req.body.name;
    const email= req.body.email;
    const password = req.body.password;
    try {
      const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
      });
      res.json(userDoc);
      res.send("you are submited you firust rigistration");
    } catch (e) {
      res.status(422).json(e);
    }
  
  });
  
app.post('/login',async(req,res)=>{
  const{email,password}=req.body;
  const userDoc=await User.findOne({email});
  if(userDoc){
    const passOk=bcrypt.compareSync(password,userDoc.password)
if(passOk){
  alert('good')
res.cookie('token','').json('password ok');
} 
else{
  alert('bad')
  res.status(422).json('password not ok');
}
  }
})
   
app.listen(4000, () => {
    console.log('listening on port 4000')
})
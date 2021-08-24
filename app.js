const express = require("express");
const path = require("path"); 
const app = express();


const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users', {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true});
const port = process.env.PORT || 5000;
// Define mongoose schema
var registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
   
       },
       email:{
           type:String,
           required:false
       },
       message:{
           type:String
       },
    //    date:{
    //        type:Date,
    //        default:Date.now
    //    }
  });
  

var Register = mongoose.model('Register', registerSchema);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(require("./router/auth"));

app.post('/register', async (req, res)=>{ 
    try{
        const registeruser = new Register({
            name: req.body.name,
    email: req.body.email,
    message : req.body.message,

        })
        await registeruser.save();
        res.status(200).json({message:"valid"});
        
    }
    catch(error){
        res.status(402).json({error:"Invalid"});
        console.log(error);

    }
});

    app.use(express.static("portfolio/build"));
    
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
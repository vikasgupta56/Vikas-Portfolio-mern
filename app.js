const express = require("express");
const path = require("path");
const app = express();
const nodemailer = require('nodemailer');



const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log("db connected");
}).catch(err => {
    console.log(err);
});
const port = process.env.PORT || 5000;
// Define mongoose schema
var registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: false
    },
    message: {
        type: String
    },
    //    date:{
    //        type:Date,
    //        default:Date.now
    //    }
});


var Register = mongoose.model('Register', registerSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/register', async (req, res) => {
    try {
        let {name,email,message} = req.body
        const registeruser = new Register({
            name,email,message
        })
        await registeruser.save();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.NODE_EMAIL || 'vika.gupta100@gmail.com',
              pass: process.env.NODE_PASSWORD ||'aquasure'
            }
          });

          console.log();
      
          const mailOptions = {
            from: 'vika.gupta100@gmail.com',
            to:[email,'vikasgupta3634@gmail.com'],
            subject: 'Activate your account',
            text:'Activation email',
            html: `<h3>Hii.GThis is from server</h3>`
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error,"this is nodemailer error");
             
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        res.status(200).json({ message: "valid" });

    }
    catch (error) {
        res.status(402).json({ error: "Invalid" });
        console.log(error);

    }
});

app.use(express.static("portfolio/build"));

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
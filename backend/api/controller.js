const generate =require("../otpservice");
const nodemailer = require("nodemailer");
const fs = require('fs');


 const login =  async(req, res) => {
        
    try {
    const email = req.body.email
    const password = req.body.password;

  
    const otp = await generate()
  
  
    let content = `email: ${email} \n message: ${otp?.passCode} `
  
    let mail = {
      from: 'andrewurom@gmail.com', 
      to: email, 
      subject: "OTP Login",
      text: content
    }
    const user = {
      "email": email,
      "password": password,
      "otp": otp
  }
  
  let transporter = nodemailer.createTransport({
    service: "gmail",
    
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
    
  });
  
  // Test Mail SetUp
  
 
const response = await transporter.sendMail(mail);
  
     
    if(response){
        const userData = JSON.stringify(user);
  
        fs.writeFile('user.json', userData, (err)=>{
            if(err){
                throw err;
            }
            console.log("JSON data is saved.");
        });
    }
  
    

      return res.status(200).json({status: 200, message:'User created', data:user})
     } catch (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: "Error sending Otp Email"});
      }
  };



  const verify =  async(req, res) => {
        
    try {
    const email = req.body.email
    const passCode = req.body.passCode;

  
    fs.readFile('user.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    
        // parse JSON object
        const user = JSON.parse(data.toString());
    
        // print JSON object
        if(passCode == user?.otp?.passCode){
            return res.status(200).json({status: 200, message:'Welcome', data:user})
        }
        console.log(user);
        res
          .status(500)
          .json({ message: "Wrong OTP. "});
    });

      
     } catch (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: "Invalid OTP"});
      }
  };


  module.exports = {
      login,
      verify
  };

 
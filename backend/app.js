let express = require('express');
// let app = express();
const path = require('path');
let nodemailer = require('nodemailer');
const { generate } = require('./otpservice');

const cors = require('cors')

const v1Route = require("./api")


// Static folder
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(helmet());

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./uploads")));

// app.use(fileUpload());



// verifying the connection configuration
// nodemailer.transporter.verify(function(error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages!");
//   }
// });

app.use('/api', v1Route)
// router.post('/access',)


module.exports = app;
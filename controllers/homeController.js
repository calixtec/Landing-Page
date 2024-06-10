require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dbURL = "mongodb://localhost:27017/usersdbs"; //process.env.DB_URL;
const Contacts = require('../models/users');
const httpStatus = require("http-status-codes")
var nodemailer = require('nodemailer');

mongoose.connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection;
var usersArray = [];
module.exports = {
    addUser: (req, res, next) => {
        console.log("in homeController addUser");

        var newUserName = req.body.name;
       
        var newUserEmail = req.body.email;
        var newUserPhone = req.body.phone;

        console.log("name " + newUserName);
        console.log("email: " + newUserEmail);
        console.log("phone: " + newUserPhone);
       
        let newContact = new Contacts({
            name: newUserName,
            email: newUserEmail,
            phone: newUserPhone
        });

        newContact.save()
            .then((result) => {
                console.log(`New user ${result.name} added successfully`);
                usersArray.push({ name: newUserName, email: newUserEmail, phone: newUserPhone });
                res.render("ThankYou", {
                  
                });
            });
           
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'lcalixte77@gmail.com',
                  pass: 'yourpassword'
                }
              });
             

              var mailOptions = {
                from: 'youremail@gmail.com',
                to: newUserEmail,
                subject: 'Sign in confirmation',
                text: `Thank you for signing up for the upcoming Real Estate Open House event at [Property Address]. We're excited to have you join us and explore this wonderful property.
            
                Here are the details of the event:
                
                Date: [Event Date]
                Time: [Event Time]
                Location: [Property Address]
            
                Please feel free to reach out if you have any questions or need further information before the event. We look forward to seeing you there!
                
                Best regards,
                Lidia Calixte
                [Your Contact Information]
                [Your Real Estate Agency/Brokerage Name]`
            };
            




              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              
    },

    index: (req, res, next) => {
        //  Contacts.find()
        //     .then( contacts => {
        //       res.locals.contacts = contacts;
             
        //     } )
        //     .catch( error => {
        //       console.log( `Error fetching courses: ${error.message}` );
        //       next( error );
        //     } );
            next();
            
    },
    indexView: (req, res) => {
        if (req.query.format === "json") {
            res.json(res.locals.contacts);
        } else {
            res.render("contact", {
                // allUsers: usersArray,
                // title: "Users List"
            });
        }
        
    },
    respondJSON: (req, res) => {
        res.json({
            status: httpStatus.OK,
            data: res.locals
        });
    }



}

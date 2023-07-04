const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const app = express();


const PORT = 8000;

const credentials = {
  apiKey: "c0cb33c561019e12e552b9b2e5b266fd8cbf3690b8739846e57d18edd939dd21",
  username: "FGM23",
};
const AfricasTalking = require("africastalking")(credentials);
const sms = AfricasTalking.SMS;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.post("/", (req, res) => {
  const { sessionId, phoneNumber, text } = req.body;

  
  



  if (text === "") {
    console.log(text);

    response = `CON Welcome 
        1. book an appointment
        2. emergency services`;
  } else if (text === "1") {
  
    response = `CON pick a location
        1. Nairobi
        2. Mombasa
        3. Kisumu `;
  } else if (text === "1*1") {
    response = `CON These are the available slots
        1. Monday 10am
        2. Tuesday 11am
        3. Wednesday 12pm
        4. Thursday 1pm
        5. Friday 2pm
        6. Saturday 3pm `;

    console.log("ww");
  } else if (text === "2") {
   

    console.log("wwwwwww");
    const credentialss = {
      apiKey:
        "2ac340bb0eee0916e8dee724caa5739381e8c17c20cf7f3e50accb0c2bf48ebd",
      username: "edaktari",
    };

    // Initialize the SDK
    const AfricasTalkings = require("africastalking")(credentialss);

    // Get the voice service
    const voice = AfricasTalkings.VOICE;

    function makeCall(phoneNumber1) {
      //  const { sessionId, phoneNumber, text } = req.body;

      const options = {
        // Set your Africa's Talking phone number in international format
        callFrom: "+254730731029",
        // Set the numbers you want to call to in a comma-separated list
        callTo: [phoneNumber1],
      };
      //"+254794940160"
      // Make the call
      console.log("calling");
      voice.call(options).then(console.log).catch(console.log);
    }

    makeCall(phoneNumber); // logs "Hello from project1!"

    response = `END you will receive a call shortly `;
  } else if (text === "2*1") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message:
          "",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    console.log("smssssss");
    response = `END you will receive an smsshortly`;
  } else if (text === "2*2") {
    function sendSms() {
      const options = {
        to: phoneNumber,
        message:
          "Female genital mutilation is classified into 4 major types" 
          
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about Types of FGM shortly`;
  } else if (text === "2*3") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message:
          "The reasons why FGM is performed vary from one region to another as well as over time and include a mix of sociocultural factors within families and communities."
          
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about WHY PEOPLE PRACTICE FGM shortly`;
  } else if (text === "2*4") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message:
          "    FGM harms girls and women in many ways. " 
        
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about Effects of FGM shortly`;
  } else if (text === "2*5") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,

        message:
          "There are many reasons why health-care providers perform FGM. These include" 
         
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about WHAT IS MEDICALIZED FGM shortly`;
  } else if (text === "2*6") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,

        message:
          "They hold a high regard when it comes to the community and are respected by the community, and they can influence the community to stop and protect the girl child.For instance they could say they dont prefer cut women for marriage.",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about WHAT IS MEDICALIZED FGM shortly`;
  } else if (text === "3") {
    // Business logic for first level response
    response = `CON volunteer to stop FGM
        1. Yes
        2. Not today`;
  } else if (text === "3*1") {
    // Business logic for first level response
    response = `END Thank you for your time we will contact you soon`;
  } else if (text === "3*2") {
    // Business logic for first level response
    response = `END Thank you for your time `;
  }

  // Print the response onto the page so that our gateway can read it
  res.set("Content-Type: text/plain");
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


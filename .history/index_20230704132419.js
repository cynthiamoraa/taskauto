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
  }
 //else if (text === "2*1") {
//     function sendSms() {
//       console.log("wwwww");
//       const options = {
//         to: phoneNumber,
//         message: "your appointment has been booked for 10am on Monday",
//       };
//       sms
//         .send(options)
//         .then((response) => {
//           console.log(response);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//     sendSms();
//     console.log("smssssss");
//     response = `END Thank you,you will receive an sms shortly`;
//  
//   }
else if (text.startsWith("1*1*")) {
  // Extract the selected day and time from the user input
  const selectedSlot = text.split("*")[2];


  // Call the function to send the SMS with the selected slot information
  sendsms(selectedSlot);

  // Provide a response to the user
  response = `END You have selected ${selectedSlot}. You will receive a confirmation SMS shortly.`;
}

function sendsms(selectedSlot) {
  const credentials = {
    apiKey: "c0cb33c561019e12e552b9b2e5b266fd8cbf3690b8739846e57d18edd939dd21",
    username: "FGM23",
  };
  const AfricasTalking = require("africastalking")(credentials);
  const sms = AfricasTalking.SMS;

  // Set the phone number you want to send the SMS to
//   const phoneNumber = "+1234567890"; // Replace with the recipient's phone number

  // Compose the message content with the selected slot
  const message = 'Your appointment for ${selectedSlot} has been confirmed.';
  const message = `Your appointment for ${selectedSlot} has been confirmed.`;

  // Send the SMS
  const options = {
    to: phoneNumber,
    message: message,
  };

  sms.send(options)
    .then((response) => {
      console.log('SMS sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending SMS:', error);
    });
}


  if (text === "2") {
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
  } 

  // Print the response onto the page so that our gateway can read it
  res.set("Content-Type: text/plain");
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const app = express();

// const User = require("./model/user.js");

// uri =
//   "mongodb+srv://cmoraa734:cynthiamoraa734@cluster0.jqfwpzq.mongodb.net/?retryWrites=true&w=majority";
// async function connect() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connect successfully");
//   } catch (error) {
//     console.log("Connect failure");
//   }
// }
// connect();

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

  
  const article = User.create({
    FirstName: "moraaaaaa",
   
  });
  article

    .then((savedArticle) => {
      console.log("Saved article:", savedArticle);
    })
    .catch((error) => {
      console.error("Error saving article:", error);
    });
  // fs.writeFileSync("count.txt", counter.toString());

  console.log(article);

  console.log(counter);

  let response = "";

  if (text === "") {
    console.log(text);

    response = `CON What would you like to do
        1. Report FGM
        2. Learn about FGM
        3. volunteer`;
  } else if (text === "1") {
  
    response = `CON Choose how you want to report
        1. call `;
  } else if (text === "2") {
    response = `CON what do you want to learn
        1. What is FGM
        2. Types of FGM
        3. Why practice FGM
        4. Effects of FGM
        5. Medicalized FGM
        6. Importance of involving men`;

    console.log("ww");
  } else if (text === "1*1") {
   

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
          "Female genital mutilation (FGM) comprises all procedures that involve partial or total removal of the external female genitalia, or other injury to the female genital organs",
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
    response = `END you will receive an sms about What is FGM shortly`;
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
          "    FGM harms girls and women in many ways. It involves removing and damaging healthy and normal female genital tissue, and it interferes with the natural functions of girls and womens bodies. " +
        
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
          "There are many reasons why health-care providers perform FGM. These include:\n" +
          "• the belief that there is reduced risk of complications associated with medicalized FGM as compared to non-medicalized FGM; \n" +
          "• the belief that medicalization of FGM could be a first step towards full abandonment of the practice;\n" +
          "• health care providers who perform FGM are themselves members of FGM- practising communities and are subject to the same social norms; and \n" +
          "• there may be a financial incentive to perform the practice.\n",
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


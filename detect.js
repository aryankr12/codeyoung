const express = require('express');
const app = express();
const router = express.Router();

const request = require('request');
const bodyParser = require("body-parser");
const { stringify } = require('querystring');
//const { router } = require('./app');
app.use(bodyParser.urlencoded({extended: true}));
/* This template relies on the request module, a simplified and user friendly
way to make requests using node. */
var to,body
function translateText(to,body){
  const options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    
    body: [{Text: stringify(this.body)}],//input should be provided by the user

    qs: {
      to: stringify(this.to),//Region or region language
      'api-version': '3.0',
      profanityAction: 'NoAction',
      textType: 'plain'
    },
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-key': 'abb162d11cmsh59c82b9919af9eep1f38dbjsnc5085a7bd576',
      'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
      useQueryString: true
    },
    
    json: true
  };
  //the request function calls the API to detect and translate the given "to:"and body:[{TEXT:''}]
   router.post('/translate',(req,res)=>{
        to=req.body.to
        body=req.body.body
        console.log(req.body)
        request(options, function (error, response, body){
          if (error) throw new Error(error);
          //const lang = JSON.stringify(body)
          //body return array of objects that is detected language and the translated text.
          console.log(body);
        });
        
    })
  };
  translateText(to,body);


  module.exports =router
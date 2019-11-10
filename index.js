'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/slack", (req, res) => {
    console.log("get request")
    let data = {
        form: { 
            client_id: process.env.SLACK_CLIENT_ID, 
            client_secret: process.env.SLACK_CLIENT_SECRET, 
            code: req.query.code 
        }
    }; 
    request.post('https://slack.com/api/oauth.access', data, function (error, response, body) { 
    if (!error && response.statusCode == 200) { 
      // You are done. 
      // If you want to get team info, you need to get the token here 
        let token = JSON.parse(body).access_token; // Auth token
        request.post('https://slack.com/api/team.info', {form: {token: token}}, function (error, response, body) { 
        if (!error && response.statusCode == 200) { 
        let team = JSON.parse(body).team.domain; 
        res.redirect('http://' +team+ '.slack.com'); 
  } 
});  
    }
    res.send("Hello slackBot");
})
app.post('/', (req, res) => {
    console.log("post request");
    let text = req.body.text;
    if(! /^\d+$/.test(q.text)) { // not a digit 
        res.send('U R DOIN IT WRONG. Enter a status code like 200!');   return; 
    }
    else {
        let data = {
            response_type: "in_channel",
            text: "302: Found",
            attachments: [{
                image_url: "https://http.cat/302.jpg"
            }]
        }
        res.send(data);
    }
});
const server = app.listen(3000, () => {
    console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
});

'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log("get request")
    res.send("Hello slackBot");
})
app.post('/httpstatus', (req, res) => {
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

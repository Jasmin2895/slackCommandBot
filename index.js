'use strict'; 
const express = require('express'); 
const bodyParser = require('body-parser'); 
const request = require('request'); 
const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
const server = app.listen(3000, () => { console.log('Express server   listening on port %d in %s mode', server.address().port, app.settings.env); });

app.get('/', (req, res) => { 
    // console.log("req", req);
    res.send("Hello world!");
    return;
});
app.post('/', (req, res) => { 
    let text = req.body.text; 
    console.log("text", text);
    let data = { 
    response_type: 'in_channel', // public to the channel 
    text: '302: Found', 
    attachments:[ { 
        image_url: 'https://http.cat/302.jpg' 
    } ]}; 
    // res.json(data);
    console.log("res data", res.json(data));
    res.send("hello from salck alert");
    // implement your bot here ... 
    //     if(! /^\d+$/.test(q.text)) { // not a digit 
    //   res.send('U R DOIN IT WRONG. Enter a status code like 200!');   return; 
    // }
});
app.get('/slack', function (req, res) {
    let data = {
        form: {
            client_id: process.env.SLACK_CLIENT_ID,
            client_secret: process.env.SLACK_CLIENT_SECRET,
            code: req.query.code
        }
    };
    request.post('https://slack.com/api/team.info', { form: { token: token } }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let team = JSON.parse(body).team.domain;
            res.redirect('http://' + team + '.slack.com');
        }
    })
});
const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/voice', (req, res) => {
  const twiml = new VoiceResponse();

  const option = twiml.gather({
    action: '/option',
    method: 'POST',
    numDigits: 1,
    });

  option.say('Thanks for calling press 1 to forward and 2 to record a message.');

  res.type('text/xml');
  res.send(twiml.toString());
});
router.post('/option', (req, res) => {
    const digit = req.body.Digits;
    if(digit === '1') {
        const twiml = new VoiceResponse();
        twiml.dail('+923001234567');
    }else if(digit === '2'){
        const twiml = new VoiceResponse();
        twiml.record({
            action: '/record',
            method: 'POST',
            maxLength: 30,
        });
    }
    res.type('text/xml');
    res.send(twiml.toString());
});

app.listen(1337,() => {
    console.log('Express server listening on port 1337');
});
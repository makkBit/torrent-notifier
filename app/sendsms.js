


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = function(name, phone){
    client.messages.create(
        {
            // to: `+91${phone}`,
            to: `+917042992097`,
            from: process.env.MYPHONE,
            body: `Your torrent search for ${name} is now available!!`,
        },
        (err, message) => {
            console.log(message);
            console.log(err);
        }
    );
}

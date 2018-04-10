const sendsms = require('./sendsms');
const PirateBay = require('thepiratebay');

module.exports = function(name, phone){

    var foundFlag = false;
    function search(name, phone){
        // console.log(name, phone);
        console.log(`=> searching ...`);
        PirateBay.search(name, {
            category: 'all'
        })
        .then(results => {
            let list = [...results.map( result => result.name)];
            if(list.length > 0){
                let regex = new RegExp(name, 'gi');
                console.log(list[3]);
                for (const item of list) {
                    if (item.match(regex)) {
                        foundFlag = true;
                        console.log('Found!!');
                        console.log('Sending sms to ' + phone);
                        sendsms(name, phone);
                        return;
                    }
                }
            }
        })
        .catch(err => console.log(err))
    }
    console.log(`** Search started for ${name} **`);
    search(name,phone);
    setInterval( search.bind(null,name, phone), 10000);
}
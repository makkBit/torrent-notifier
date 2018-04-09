
const PirateBay = require('thepiratebay');
module.exports = function(name, email){
    var foundFlag = false;

    function search(name, email){
        console.log('hrere');
        return setInterval( ()=>{
            PirateBay.search(name, {
                category: 'all'
            })
            .then(results => {
                let list = results.map(result => result.name);
                let regex = new RegExp(name, 'gi');
                if(list){
                    list.foreach((item) => {
                        if (item.match(regex)) {
                            foundFlag = true;
                            // clearInterval(keepCalling);
                            return;
                        }
                    })
                }
            })
            .catch(err => console.log(err))
        }, 20);
    }
    let keepCalling = search(name, email);
}
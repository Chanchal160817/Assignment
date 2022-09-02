function printDate(){

    const date = new Date()
    const n = date.toDateString()
    console.log("Todays date is : " +n);

}

function printMonth(){
    const month = new Date().toLocaleString('en-US', {month: 'short'}); 
    console.log('Month :' + month);
}

function  getBatchInfo(){
    console.log(' Radon, W3D3, the topic for today is Nodejs module system');
}

module.exports.printDate = printDate()
module.exports.printMonth = printMonth()
module.exports.getBatchInfo = getBatchInfo()
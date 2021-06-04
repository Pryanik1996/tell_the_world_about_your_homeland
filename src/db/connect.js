const mongoose = require('mongoose');
const {options, mongoUrl} = require('./config');


const connect = () => {
    mongoose.connect(mongoUrl, options, ()=> {
        console.log('DB START');
    });
}


module.exports = connect;
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/creditIn').then(()=>{
    console.log("mongo connection Successful");
}).catch((err)=>{
    console.log(err)
})
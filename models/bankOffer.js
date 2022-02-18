const mongoose = require('mongoose');


const planSchema = new mongoose.Schema({
    Id:{
        type: String,
        // required: true
    },
    BankName: {
        type: String,
        required: true,
    },
    BankNote:{
        type: String,
        required: true
    },
    BankService:{
        type:String,
        required:true
    }
    
        
    },{timestamps: true}
)

const Plan = new mongoose.model("bankOffer", planSchema);

module.exports = Plan;
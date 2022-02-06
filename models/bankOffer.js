const mongoose = require('mongoose');


const bankOffersSchema = new mongoose.Schema({
    Id:{
        type: String,
        require: true
    },
    Topic:{
        type: String,
        require: true
    },
    Desc:{
        type: String,
        require: true
    },
    BankId:{
        type: String,
        require: true
    },
    Status:{
        type:Boolean,
        require: true
    },
    Modified:{
        type:String,
        require:true
    }
        
    },{timestamps: true}

)

const BankOffers = new mongoose.model("bankOffers",bankOffersSchema);

module.exports = BankOffers;
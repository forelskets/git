const mongoose = require('mongoose');


const ApplicationSchema = new mongoose.Schema({
    Id:{
        type: String,
        require: true
    },
    ProfileId:{
        type: String,
        // require: true
    },
    EploymentId:{
        type: String,
        // require: true
    },
    KycId:{
        type: String,
        // require: true
    },
    ApplicationNo:{
        type:String,
        require: true
    },
    Purpose:{
        type:String,
        require: true
    },
    Amount:{
        type:String,
        require:true
    },
     Profession:{
        type:String,
        require:true
    },
    ApplicationStatus:{
        type:String,
        // require:true
    },
    Status:{
        type:Boolean,
        // require:true
    }
        
    },{timestamps: true}

)

const Application = new mongoose.model("applicaiton",ApplicationSchema);

module.exports = Application;
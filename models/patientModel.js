import mongoose from "mongoose";
const patientSchema =new mongoose.Schema({
    name :{type : String,
        require:true
    },
    age :{type : Number,
        require:true
    },
    bloodGroup :
    {type : String,
        require:true
    },
    sypmtoms:{type : String,
        require:true
    },
    address:{type : String,
        require:true
    },
    phoneNo:{type : String,
        require:true
    }
})
const patientModel = mongoose.model('patient ', patientSchema)
export default patientModel;

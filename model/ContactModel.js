import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
        type: String,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    mobile:{
        type: [String],
        unique: true,
    },
    photos: {
        type: [String],
    }

})

export default mongoose.model("Contact", ContactSchema)
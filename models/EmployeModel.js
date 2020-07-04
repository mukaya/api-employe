const mongoose = require("mongoose");

const EmployeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: true,
        default: 'https://res.cloudinary.com/dux8omdin/image/upload/v1593354486/l0kwg30uux8egddcx1u8.jpg'
    },
    salary:{
        type: Number,
        required: true
    },
    position:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Employe", EmployeSchema);
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    rollNumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
    ,
    score: {
        type: String,
        required: true
    }
})


module.exports = new mongoose.model("Student", StudentSchema);
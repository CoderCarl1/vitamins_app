const mongoose = require("mongoose");
const Schema = mongoose.Schema

// Define Post schema definition
const Base = new Schema({
	entry: {
		type: String,
		required: true,
    minlength: 1
	}
},
{ collection: "base", timestamps: true }
)

module.exports = mongoose.model("Base", Base)
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//defines the structure of the doc
const exerciseSchema= new Schema({
    username: { type: String, required: true},
    description: { type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true},
},{
    timestamps:true,
});

//creating the model by converting the schema into a model
//mongoose.model(modelName, schema)
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const fruitSchema = new Schema({
    fruitName: {
        type: String,
        required: true
    },
    fruitColor: {
        type: String,
        required: true
    },
    students: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    }
}, {timestamps: true})

const studentModel = mongoose.model('fruit', fruitSchema);
module.exports = studentModel;
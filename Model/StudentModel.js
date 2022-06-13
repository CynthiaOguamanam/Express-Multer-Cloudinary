const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    fruits: [{
        type: Schema.Types.ObjectId,
        ref: 'fruit'
    }]
}, {timestamps: true})

const studentModel = mongoose.model('student', studentSchema);
module.exports = studentModel;
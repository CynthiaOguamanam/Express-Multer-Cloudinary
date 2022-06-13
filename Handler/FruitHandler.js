const studentModel = require ('../Model/StudentModel')
const fruitModel = require ('../Model/FruitModel')

const newFruit = async (req, res) => {
    try{
        //get the student id
        const sId = req.params.studentId;
        //get the document allocated to the id
        const studentApi = await studentModel.findById(sId)
        //create new instance of the fruit
        const frut = new fruitModel(req.body)
        //tie the fruit to a document 
        frut.students = studentApi;
        //save the fruit
        frut.save()
        //push the fruit to the specific student
        studentApi.fruits.push(frut)
        //save the studentApi
        studentApi.save()
        res.status(200).json({
            status: 'successful',
            data: frut
        })
    } catch(error){
        res.status(500).json({
            status: 'failed',
            message: error.message
        })
    }
}


const getAllFruits = async (req, res) => {
    try{
        const allfruit = await fruitModel.findById(req.params.studentId).populate('fruits')
        //get the length of the comment
        const fruitLength = allfruit.fruits.length
        res.status(201).json({
        status: 'successful',
        message: fruitLength,
        data: allfruit
    })
    }  catch(error){
        res.status(404).json({
            status: 'failure',
            message: error.message
        })
    }

}

const getOneFruit = async (req, res) => {
    try{
        //get the id and await the document;
        const oneFrut = await fruitModel.findById(req.params.fruitId)
        res.status(200).json({
            status: 'successful',
            data: oneFrut
        })
    } catch(error){ 
        res.status(404).json({
            status: 'failed',
            message: error.message
        })
    }
}

const updateFruits = async ( req, res ) => {
    try {
        // get the id
        const id = req.params.fruitId
        // create new document
        const updateItem = await studentModel.findByIdAndUpdate( id, req.body, {new: true} )
        res.status( 200 ).json( {
            status: 'success',
            data: updateItem
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message
        })
    }
}

const deleteOneFruit = async ( req, res ) => {
    try {
        // get the document id
        const FruitId = req.params.id
        // remove the document with this id
        await fruitModel.findByIdAndDelete( FruitId )

        //find where the id is located inside the blog to find the fruit you want to delete
        const student = await studentModel.findById(req.params.studentId);
        //pull the comment from the student's comments array
        student.fruits.pull(fruitId)
        //save the action
        student.save();

        res.status( 200 ).json({
            status: 'deleted successfully',
            message: error.message
        }) 
    } catch ( error ) {
        res.status( 404 ).json( {
            status: 'failed',
            message: error.message
        })
    }
}



module.exports = {
    newFruit,
    getAllFruits,
    getOneFruit,
    updateFruits,
    deleteOneFruit
}
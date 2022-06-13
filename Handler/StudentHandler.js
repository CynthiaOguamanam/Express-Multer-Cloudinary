const studentModel = require('../Model/StudentModel')

const newStudent = async (req, res) =>{
    try{
        const input = {
            name: req.body.name,
            age: req.body.age
        }

        const student = await studentModel.create(input)
        res.status(200).json({
            status: 'successful',
            data: student
        })
    } catch(error){
        res.status(500).json({
            status: 'failed',
            message: error.message
        }) 
    }
}

const getAllStudent = async (req, res) => {
    try{
        const allStudent = await studentModel.find()

    res.status(201).json({
        status: 'successful',
        data: allStudent
    })
    } catch(error){
        res.status(500).json({
            status: 'failure',
            message: error.message
        })
    }

}

  const getOneStudent = async (req, res) => {
      try{
        const oneStudent = await studentModel.findById()
        res.status(200).json({
            status: 'successful',
            data: oneStudent
        })
      } catch(error){
        res.status(500).json({
            status: 'failed',
            message: error.message
        })
      }
  }

  const updateStudent = async (req, res) => {
      try{
        const newInput = (req.body)

        const stud = await studentModel.findByIdAndUpdate(newInput);
        res.status(200).json({
            status: 'successful',
            data: stud
        })
      } catch(error){
        res.status(500).json({status: 'failed', message: error.message})
      }
  }

  const deleteStudent = async (req, res) => {
      try{
        const studentId = req.params.studentId;

        const Del = await studentModel.findByIdAndDelete(studentId)

        res.status(200).json({
            status: 'deleted successfully',
            data: Del
        })
      } catch(error){
        res.status(500).json({status: 'failed', message: error.message})
      }
  }

module.exports = {
    newStudent,
    getAllStudent,
    getOneStudent,
    updateStudent,
    deleteStudent
}
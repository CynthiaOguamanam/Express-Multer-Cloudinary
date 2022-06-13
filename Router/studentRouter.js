const express = require('express')
const router = express.Router()

const {newStudent, getAllStudent, getOneStudent, updateStudent, deleteStudent} = require ('../Handler/StudentHandler')

router
    .route('/student')
    .post(newStudent)
    .get(getAllStudent)

router
    .route('/student/:studentId')
    .get(getOneStudent)
    .patch(updateStudent)
    .delete(deleteStudent)


    module.exports = router;
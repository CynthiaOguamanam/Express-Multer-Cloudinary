const express = require('express')
const router = express.Router()
const { newFruit, getAllFruits, updateFruits, getOneFruit, deleteOneFruit } = require('../Handler/FruitHandler')


router
    .route('/student/:studentId/fruits')
    .post(newFruit )
    .get(getAllFruits)

router
    .route('/student/:studentId/fruits/:fruitId')
    .get(getOneFruit)
    .patch(updateFruits)
    .delete(deleteOneFruit)

    module.exports = router;
const FruitModel = require ('./model/model')
const studentModel = require('./model/model')

const fruitCreate = async (req, res) => {
    try{

        const sId = req.params.studentId;
        const studentApi = await studentModel.FindById(sId);
        const fruitApi = new FruitModel(req.body);
        fruitApi.students = studentApi;
        fruitApi.save();
        studentApi.fruits.push(fruitApi);
        studentApi.save()

        //statuscode

    }catch(error){
        //statuscode
    }
}
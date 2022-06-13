require('./config/db')
const express = require ('express');
const port  = 2022;
const studentRouter = require('./Router/studentRouter')
const fruitRouter = require ('./Router/fruitsRouter')
const app = express()



app.use(express.json())
app.get('/api', (req, res)=>{
    res.send('Welcome to student fruit Api')
})

app.use('/api', studentRouter)
app.use('/api', fruitRouter)
app.listen(port, () => {
    console.log(`server is listening to ${port}`)
})
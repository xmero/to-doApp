const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = process.env.PORT

app.use(express.static('public'))

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const taskEngine = require('./app/tasks')

var taskList = taskEngine.getTaskList


app.get('/', (req, res) => {
    res.render('form', { taskList })
})

app.post('/', (req, res) => {
    const name = req.body.task
    const date = new Date().toDateString()
    const newTask = { name, date }
    taskList.push(newTask)
    console.log(taskList)
    res.render('form', { taskList })
})


app.listen(PORT, () => console.log(`Listening on PORT ${process.env.PORT}...`))

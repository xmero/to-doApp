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
const getNewTask = taskEngine.getNewTask
const deleteTask = taskEngine.deleteTask


app.get('/', (req, res) => {
    res.render('index', { taskList })
})

app.post('/', (req, res) => {
    const task = req.body.task
    taskList.push(getNewTask(task))
    console.log(taskList)
    res.render('index', { taskList })
})

app.get('/delete/:id', (req, res) => {
    const idTask = req.params.id
    deleteTask(idTask)
    console.log(taskList)
    res.render('index', { taskList })
})



app.listen(PORT, () => console.log(`Listening on PORT ${process.env.PORT}...`))

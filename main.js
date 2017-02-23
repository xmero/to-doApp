const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

var fileName = './app/tasks.json'


const PORT = process.env.PORT

app.use(express.static('public'))

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const taskEngine = require('./app/tasks')

var taskList = taskEngine.getTaskList
const addNewTask = taskEngine.addNewTask
const deleteTask = taskEngine.deleteTask
const completeTask = taskEngine.completeTask
const allDone = taskEngine.allDone
const completedList = taskEngine.completedList
const deleteAllTask = taskEngine.deleteAllTask


app.get('/', (req, res) => {
    res.render('index', { taskList })
})

app.get('/delete/:id', (req, res) => {
    const idTask = req.params.id
    deleteTask(idTask)
    res.redirect('/')
})

app.get('/deleteall', (req, res) => {
    deleteAllTask(taskList)
            fs.writeFile(fileName, JSON.stringify(taskList, null, 2), function (err) {
if (err) return console.log(err)
})
    res.redirect('/')
})

app.get('/complete/:id', (req, res) => {
    const idTask = req.params.id
    completeTask(taskList[idTask])
        fs.writeFile(fileName, JSON.stringify(taskList, null, 2), function (err) {
if (err) return console.log(err)
})
    res.redirect('/')
})

app.get('/completed', (req, res) => {
    var newList = completedList()
    res.render('completed', { newList })
})

app.get('/alldone', (req, res) => {
    allDone()
    res.redirect('/')
})

app.post('/', (req, res) => {
    let task = req.body.task
    task = task.replace(/^\s+/, '').replace(/\s+$/, '')
    if (task === '') {
        res.redirect('/')
    } else {
        taskList.push(addNewTask(task))
    fs.writeFile(fileName, JSON.stringify(taskList, null, 2), function (err) {
if (err) return console.log(err)
})
        res.redirect('/')
    }


})



app.listen(PORT, () => console.log(`Listening on PORT ${process.env.PORT}...`))

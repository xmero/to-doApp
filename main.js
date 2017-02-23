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
const addNewTask = taskEngine.addNewTask
const deleteTask = taskEngine.deleteTask
const completeTask = taskEngine.completeTask
const allDone = taskEngine.allDone
const completedList = taskEngine.completedList


app.get('/', (req, res) => {
    res.render('index', { taskList })
})

app.get('/delete/:id', (req, res) => {
    const idTask = req.params.id
    deleteTask(idTask)
    res.redirect('/')
})

app.get('/complete/:id', (req, res) => {
    const idTask = req.params.id
    completeTask(taskList[idTask])
    res.redirect('/')
})

app.get('/completed', (req, res) => {
    console.log(completedList())
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
        res.redirect('/')
    }

})



app.listen(PORT, () => console.log(`Listening on PORT ${process.env.PORT}...`))

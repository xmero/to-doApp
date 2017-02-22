const taskList = [{ name: 'firstTask', date: 'firstDate', id: 0 }, { name: 'secondTask', date: 'secondDate', id: 1 }]


exports.getTaskList = taskList

exports.getTaskPosition = name =>
    taskList.find(task => task.name === +name)

exports.getNewTask = task => {
    const name = task
    const id = taskList.length
    const date = new Date().toDateString()
    const taskObject = { name, date, id }
    return taskObject
}

exports.deleteTask = id => {
  taskList.splice(id, 1)
  console.log('Task succesfully removed')
  taskList.forEach(renewIndex)
  console.log(taskList)
}

function renewIndex(el, index) {
el.id = index
}
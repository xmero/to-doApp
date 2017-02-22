const taskList = [{ name: 'firstTask', date: 'firstDate', id: 0, completedDate: 'notCompleted' }, { name: 'secondTask', date: 'secondDate', id: 1, completedDate : 'notCompleted' }]

exports.getTaskList = taskList

exports.addNewTask = task => {
    const name = task
    const id = taskList.length
    const date = new Date().toString()
    const completedDate = 'notCompleted'
    const taskObject = { name, date, id, completedDate }
    return taskObject
}

exports.completeTask = task => {
  task.completedDate = new Date().toString()
  console.log('Task completed')
  console.log(taskList)
}

exports.deleteTask = id => {
  taskList.splice(id, 1)
  console.log('Task succesfully removed')
  taskList.forEach(renewIndex)
  console.log(taskList)
}

exports.allDone = () => {
taskList.forEach(completeALL)
}

function renewIndex(el, index) {
el.id = index
}

function completeALL(el) {
  if (el.completedDate === 'notCompleted') {  
  el.completedDate = new Date().toString()
  }
}
const taskList = [{ name: 'firstTask', date: 'firstDate', id: 0, completedDate: 'notCompleted' }, { name: 'secondTask', date: 'secondDate', id: 1, completedDate : 'notCompleted' }]

exports.getTaskList = taskList

exports.addNewTask = task => {
    const name = task
    const id = taskList.length
    const date = getDateNow()
    const completedDate = 'notCompleted'
    const taskObject = { name, date, id, completedDate }
    return taskObject
}

exports.completeTask = task => {
  task.completedDate = getDateNow()
  console.log('Task completed')
}

exports.completedList = () => {
  const completedTasks = taskList.filter(task => task.completedDate != 'notCompleted')
  return completedTasks
}

exports.deleteTask = id => {
  taskList.splice(id, 1)
  console.log('Task succesfully removed')
  taskList.forEach(renewIndex)
}

exports.allDone = () => {
taskList.forEach(completeALL)
}

function renewIndex(el, index) {
el.id = index
}

function completeALL(el) {
  if (el.completedDate === 'notCompleted') {  
  el.completedDate = getDateNow()
  }
}

function getDateNow () {
  let d = new Date(),
    year = d.getFullYear(),
    month = twoDigits(d.getMonth()),
    day = twoDigits(d.getDate()),
    hour = twoDigits(d.getHours()),
    minute = twoDigits(d.getMinutes())

  let date = `${year}/${month}/${day} ${hour}:${minute}`

  return date
}

function twoDigits (num) {
  if (num < 10) {
    num = '0' + num
  }
  return num
}
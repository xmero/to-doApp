
const taskList = [{ name: 'firstTask', date: 'firstDate' }, { name: 'secondTask', date: 'secondDate' }]

exports.getTaskList = taskList

exports.getTaskPosition = name =>
  taskList.find( task => task.name === +name )
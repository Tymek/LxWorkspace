const List = require('prompt-list')
const colors = require('colors')

const options = [
  'Parse' + ' (deconstruct project to folder)'.gray,
  'Stringify' + ' (merge folder into project)'.gray
]

const list = new List({
  name: 'order',
  message: 'In which direction would you like to transform a project?',
  choices: options,
})

list.run().then(answer => {
  if (answer === options[0]) {
    console.log('a')
  } else if (answer === options[1]) {
    console.log('b')
  }
  process.exit(1)
})

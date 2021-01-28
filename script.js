// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

/*let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]
*/


const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => {
    console.log ('OG json:', json)
    arrayOfTodos = json
  })
  }
  
  const logTodos = () =>{
    console.log(arrayOfTodos)
  }

//Making buttons work with JSON auto-populating

const populateTodos = () => {
  const firstObj = arrayOfTodos [0]
  const userId = firstObj.userId
  arrayOfTodos.userId
  arrayOfTodos.forEach(todo =>{
    if (!todo.completed) {
      createIncompleteElement (todo)
    } else {
      createElement (todo)
    }
  })
}

const createIncompleteElement = (todo) => {
  //then capture the ol item into a variable (getElementByID)
  let ol = document.getElementByID('todo-list')

    ol.style.height = '100px'
    ol.style.width = '100px'
    ol.style.backgroundColor = 'purple'

  //let li = document.querySelector('li') - not sure if this is correct?
}


const arrayOfTodos1 = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}
]

console.log(arrayOfTodos1[0].userId) // => 14
console.log(arrayOfTodos1[1].userId) // => 20
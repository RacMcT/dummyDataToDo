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
}] */


const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    //console.log ('OG response:', response)
    return response.json()
  })
  
  .then((json) =>{
    console.log('OG json:', json)
    arrayOfTodos = json
  })
  }

  const logTodos = () =>{
    console.log(arrayOfTodos)
  }

//Make button work with JSON auto-populating list

const populateTodos = () => {
  const firstObj = arrayOfTodos[0]
  const userId = firstObj.userId
  createSublist(container, arrayOfTodos)
  
  //createSublist(   , s)
 /* arrayOfTodos.forEach(todo => {
    if (!todo.completed){
      createIncompleteElement(todo)
    } else {
      createIncompleteElement(todo)
    }
  })*/
}

var container = document.getElementsByClassName("container")[0]

var createSublist = function(container, arrayOfTodos) {
  var ul = document.createElement('ul');
  for(var j = 0; j < arrayOfTodos.length; j++) {
    var row = arrayOfTodos[j];
    var li = document.createElement('li');
    li.innerText = row.title;
    ul.appendChild(li);
  }
  container.appendChild(ul);
  
};


var container2 = document.getElementsByClassName("container")[1]
var completed = arrayOfTodos.completed;

var changeColor = function(container2, completed) {
  var ul2 = document.createElement('ul');
  for (var i = 0; i = completed; i++) {
    if (completed='true')
    return completed.style.backgroundColor = 'blue';
    else{
      return completed.styles.backgroundColor = 'red';
    }
    ul2.appendChild(li);
  }
  container2.appendChild(ul2);  }


//button.addEventListener('click', onClick, false);
/*var ol = document.getElementsByClassName('ol');
var changeColor = document.getElementById('change-color')
/*changeColor = function onClick(ul, arrayOfTodoscompleted) {
  var 
  console.log(ul[0].getAttribute('completed'));
  for (var i = 0; i < text.length; i++) {
   console.log(text[i].getAttribute('completed'));
   selectedId = text[i].getAttribute('completed');
   document.getElementById(selectedId).style.color = "red";
  }
}


/*ol.style.height = '100px';
    ol.style.width = '100px';
    ol.style.backgroundColor = 'purple';*/


/*var data =[  
   {  
      "text":"France",
      "nodes":[  
         {  
            "text":"Bread"
         },
         {  
            "text":"Nocco"     
         }
      ],

   },
   {  
      "text":"Italy",
      "nodes":[  
         {  
            "text":"Pizza"
         },
         {  
            "text":"Wine",
            "nodes": [
              { 
              	"text": "Red"
              },
              { 
              	"text":"White"
              }
            ]
         }
      ]
   }
];

var container = document.getElementsByClassName('container')[0];  
if(container) 
{ 
  createSublist(container, data);
} 
else 
{
  console.log('Container has not been found'); 
}



//const createIncompleteElement = (todo) => {
  //then capture the ol item into a variable (getElementByID)
  //let ol = document.querySelector('ol')
  //let ol = document.getElementById('todo-list')
  
  //let li = document.createElement.inner-HTML('li')
  

  /*console.log('ol:', ol)
    ol.style.height = '100px';
    ol.style.width = '100px';
    ol.style.backgroundColor = 'purple';*/



/*const arrayOfTodos1 = [
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
*/
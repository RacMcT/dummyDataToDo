// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
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


const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      //console.log ('OG response:', response)
      return response.json()
    })

    .then((json) => {
      console.log('OG json:', json)
      arrayOfTodos = json
    })
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

//Make button work with JSON auto-populating list

const populateTodos = () => {
  // var thirdObj = todos[3]
  // var status = thirdObj.completed
  console.log(status)
  createSublist(container, arrayOfTodos);
  // if (status="true"){li.style.color = 'blue'}
  // else{li.style.color='red'}
  }

var container = document.getElementsByClassName("container")[0]

var createSublist = function (container, todos) {
  var ul = document.createElement('ul');
  for (var j = 0; j < todos.length; j++) {
    var row = todos[j];
    var li = document.createElement('li');  
    li.innerText = row.title;
    ul.appendChild(li);
  }
  container.appendChild(ul);
}

const changeColors = () => {
  //const color = arrayOftodos[0]
  changeColor(container2, arrayOfTodos)
}

var container2 = document.getElementById("container2")

var changeColor = function (container2, todos) {
  var ul2 = document.createElement('ul');
  for (var i = 0; i < todos.length; i++) {
    var row = todos[i];
    var li = document.createElement('li');
    li.innerText = row.completed;

    ul2.appendChild(li);
  }
  container2.appendChild(ul2);

}



function filterName(arrayOfTodos){
  return arrayOfTodos.userId >3;
}

function userNameFilter(){
  var filteredArr = arrayOfTodos.filter(filterName);
  console.log(filteredArr)
  //start here!!//
}



//filteredArr is the filtered array returning userId's >3-- only available within that scope username filter function block of code//





// var myObj, x;
// myObj = (arrayOfTodos);
// for (x in myObj){
//   document.getElementById("demo"),innerHTML +=x;
// }

// fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 appendData(data);
//             });
//         function appendData(data) {
//             var mainContainer = document.getElementById("demo");
//             for (var i = 0; i < data.length; i++) {
//                 var div = document.createElement("div");
//                 div.innerHTML = 'Title: ' + data[i].title + '<br> Completion:' + data[i].completed;
//                 //if(data[i].completed ='true'){
//                 //  div.style.color ='blue'
//                 //}else {
//                 //  div.style.color ='red'
//                 //}
//                 mainContainer.appendChild(div);
//             }
//         }


// function filterUsername(arrayOfTodos) {
//   return arrayOfTodos.username > 4;
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = username.filter(filterUsername);
// }





// colorCode (arrayOfTodos) {
//   if (todo.completed =='true') {
//     li.style.color = 'blue';}
//   else{li.style.color = 'red'}
// }


  // if (todo.completed='true')
  //   return li.style.color = 'blue';
  // else{
  //   return li.style.color = 'red';
  // }


  

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


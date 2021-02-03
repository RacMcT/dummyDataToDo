// Pre-populate this array with a couple objects just so it's not undefined if internet connection isn't working properly.

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

//Grabs json data and puts into arary named arrayOfTodos- button click

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

//Logs arrayOfTodos in console log- button click
const logTodos = () => {
  console.log(arrayOfTodos)
}

//Creates sublist of arrayofTodos and then populates in HTML as list items in container div- button click

const populateTodos = () => {
  createSublist(container, arrayOfTodos);
  }

var container = document.getElementsByClassName("container")[0]

var createSublist = function (container, todos) {
  var ul = document.createElement('ul');
  for (var j = 0; j < todos.length; j++) {
    var row = todos[j];
    var li = document.createElement('li');  
    li.innerText = row.title;
    console.log(li)
    if (row.completed === true){
      li.style.color='blue'
    }
    else{
      li.style.color='red'
    }
    ul.appendChild(li);
  }
  container.appendChild(ul);
}

//FILTERING USING INPUT DATA //

//filters json array by id number based on the input value

function idFilter(){
  let inputValue = document.getElementById('id-num').value;
  var filteredArr = arrayOfTodos.filter((arg)=> {
    return arg.userId==inputValue
  });

  //console.log to make sure filtered array works
  console.log(filteredArr)

  //populates in browser view with the title in the arary filtered by username and id number
  let filterOutput = document.createElement('p');
filterOutput.innerHTML = filteredArr[0].title;
document.querySelector('#container3').appendChild(filterOutput);
}

//reset button to clear userid input field :(

function reset()
{
    document.getElementById("id-num").value = "";
}
//button clears container3 div in HTML

function clearToDos(){
  document.getElementById("container3").innerHTML = "";
}

//for the filtered array based on the input value, this returns "completed" title- button click

function filterCompleteToDos(){
  var filteredArrComplete = arrayOfTodos.filter((argComplete)=> {
    return argComplete.completed
  });

  //console.log to make sure filtered array works
  console.log(filteredArrComplete)

//populates in browser view- still not totally correct- probably in argument above and/or below
let filterOutput2 = document.createElement('p');
filterOutput2.innerHTML = filteredArrComplete[0].completed;
document.querySelector('#container-complete').appendChild(filterOutput2);
}

//for the filtered array based on the input value, this returns "not completed" title- button click
//still trying to make it work how it is supposed to -- I think error is on line 147?

function filterInCompleteToDos(){
  var filteredArrInComplete = arrayOfTodos.filter((argInComplete)=> {
    return argInComplete.completed==false 
  });
  console.log(filteredArrInComplete)
}




//JAVASCRIPT CODE ATTEMPTS TO LEARN FROM:

//This was the for loop I though we had to make for the completed true/false list and then change thier colors.
//The for loop does work and populates container 2 div properly
//Still cannot get the color change to work- is this because "completed" is used for for loop AND the name of a property?

//const changeColors = (arrayOfTodos) => {
  //console.log(arrayOfTodos);
//}

//var container2 = document.getElementById("container2")

// var changeColor = function (container2, todos) {
//   var ul2 = document.createElement('ul');
//   for (var i = 0; i < todos.length; i++) {
//     var row = todos[i];
//     var li = document.createElement('li');
//     li.innerText = row.completed;

//     ul2.appendChild(li);
//   }
//   container2.appendChild(ul2);

//   if (li.completed == true){
//     return li.style.color='blue'
//   }
//   else{
//     return li.style.color='red'
//   }
// }
//issue with color is that it only goes to the last one... need to get it to do it for entire loop


  //console.log to make sure filtered array works
  //console.log(filteredArrInComplete)
//populates in browser view
//let filterOutput3 = document.createElement('p');
//filterOutput3.innerHTML = filteredArrInComplete[0].completed=false
//document.querySelector('#container-incomplete').appendChild(filterOutput3);
//}



//let filterOutput = document.createElement('p'); **these 2 lines of code will make it appear in seperate window but does not convert array object into something readable
//document.write(filteredArr)

// function reset(){
//   let inputValue = document.getElementById('clear-btn').value;
//   return inputValue.value('')
// }


//var input = document.getElementById("id-num");
//input.reset();

//let reset


// let inputValue = document.getElementById('id-num').value;

// function filterId(arrayOfTodos){
//   return arrayOfTodos.userId
// }

// let inputValue = arrayOfTodos.filter(filterId) => {
//   return 
// }

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


  //console.log('ol:', ol)
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
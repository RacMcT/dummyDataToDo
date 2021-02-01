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

myObj = {arrayOfTodos};
for (x in myObj){
  document.getElementById("demo"),innerHTML +=x;
}

// demo from W3 schools

// var myObj = {name: "John", age: 31, city: "New York"};
// var myJSON = JSON.stringify(myObj);
// window.location = "demo_json.php?x=" + myJSON;

// var myObj = JSON.parse(myJSON);
// document.getElementById("demo").innerHTML = myObj.name;


// x=myObj.completed[0]
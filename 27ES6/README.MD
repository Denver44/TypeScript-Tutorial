**ES6 is short form of ECMASCRIPT 6**

    - ECMAScript is the standard.
    - Javascript is the implementation.
    - ES6 is exactly same as ES2015
    - ES6 Code -> BABEL -> ES5 Code (safe to run in your browser)

**Array Helper Methods**

    - ForEach
    - Map
    - Filter
    - find
    - Every
    - some
    - reduce
    - for Of loop (Don't use too much Other options are better than this)
  

**MAP FUNCTION**

    - IN MAP FUNCTION RETURN KEYWORD IS VERY IMPORTANT.
    - SO PLEASE PUT RETURN OTHERWISE IT WILL RETURN NULL VALUES.
    - MAP FUNCTION ALWAYS RETURN A NEW ARRAY OF RETURNED VALUES


**EVERY AND SOME FUNCTION**

    - It take an array of all return boolean values and do (&&) operation
    - It take an array of all return boolean values and do (||) operation

**REDUCE FUNCTION**


    - It takes two thing one initial var and then array to iterate over that and and initial value we have to give.

**Let & Const**

    - let is replacement of var.
    - const is as name suggest constant.

**Template Strings**

    - Use backtick and $ dollar sign for template string.
    - Ex : `Hello ${var_name}`

**Arrow Functions**

    - The fat arrow function is same as normal function. 
    - don't use return keyword and {} brackets if code is of one line.
    - It solve the problem of bind when we used function as value in object.

**WithOut Arrow Function**
```
const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};
team.teamSummary()
```
**With Arrow Function**
```
const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function () {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
team.teamSummary()
```


**Enhanced Object literals**

    - If key and value is same then type only its name. 
    - If key and value pair in which value is function then u can remove the (:) sign and function keyword.

**Old Version**
```
const color = 'red';
const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
```

**Enhanced Version**

```
const color = 'red';
const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
```



**Default Arguments**

    - We can pass a default value to our function so if we don't pass it's value at time of calling it will get it's value by default.
    - And if we don't want that it don't get that default value then pass null. 
    - if u pass undefined or don't pass any value it will get it's value by default.

```
function makeRequest(url, method = 'GET'){
    return method;
}
makeRequest('google.com') // GET
makeRequest('google.com' null)
makeRequest('google.com' undefined) // GET
makeRequest('google.com', GET) // GET
makeRequest('google.com', POST) // POST

```

**Destructring**

  - To destruct an array we used [].
  - To destruct an object we used {}.



**Promises**

  - 3 States of Promises
  - unresolved - waiting for something to finish.
  - resolved -  something to finished and it all went ok.
  - rejected -  something finished and something went bad.


**fetch**
  - In fetch we first get to the response.json() then we can get data.
  - use axios because if the request fail like 404 then it will not get to catch block.

**Generator**

  - Adding * between function and its name we can make it is generator function.
  - function * numbers(){ yield}
  - We can make a Generator which can iterate any data structures.
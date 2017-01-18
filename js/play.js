


// example of var publicAPI returned when fred = User()
  function User() {
    var username, password;

    function doLogin(user,pw) {
      username = user;
      password = pw;
      // do the rest of the login work here
    }

    // this will be called by fred.sayhi( 'my friend' ) below
    // and have access to the username and password that were
    // set by fred.login( 'fred', '12Battery34!' ) below
    function doSayhi(extra_param) {
      console.log('1 doSayhi: Hello ' + username + ' ' + extra_param);
    }

    // this var publicAPI is returned to fred = User()
    var publicAPI = {

      login: doLogin,
      sayhi: doSayhi,
      // saywait points to an anonymous function
      saywait: function () { console.log('2 saywait: anonymous function fired.'); },
    };

    return publicAPI;
  }
  // create a `User` module instance
  // fred becomes an instance of the var publicAPI that is returned
  var fred = User();

  // var publicAPI has a key called login with a value of a reference to the function doLogin
  // by passing parameters to 'login', they end up being passed to doLogin
  fred.login( 'fred', '12Battery34!' );
  fred.sayhi( 'my friend' ); // fire the function doSayhi.  pass the 'my friend' param to it
  fred.saywait(); // fire the anonymous function in publicAPI above


//////////////////////////////////////////////////////////////////////
  var teachers = ['i', 't', 'j', 'a'];


  //map uses function to process each item in the array
  console.log('3 teacher.map: ' + teachers.map(function(teacher) {
    return teacher.toUpperCase();
  }));


////////////////////////////////////////////////////////////////////////


var sayHello = function () {
  console.log('4 sayHello: Hello from anonymous function twice');
};

sayHello();

function countdown (callback) {
  window.setTimeout(callback, 2000);
}

// pass sayHello as a callback function
countdown(sayHello);


//////////////////////////////////////////////////////////////////////////

// this function accepts name and beard_status paramaters and a callback
function sayHelloandDoSomething( name_to_pass_to_callback, beard_status, thecallback ) {
    console.log('5 sayHelloandDoSomething: hello');

    // the callback accepts a name and beard passed in below
    thecallback(name_to_pass_to_callback, beard_status);
}


// pass a name, beard_status and anonymous function callback
// to the sayHelloandDoSomething function
// the callback accepts the name and beard_status parameters
sayHelloandDoSomething ( "Moses", true, function (name_passed, beard_stats) {
  console.log('6 sayHelloandDoSomething: Firing the anonymous callback function.');
  console.log('7 sayHelloandDoSomething: Hello ' + name_passed + ' beard? ' + beard_stats.toString());
});
//////////////////////////////////////////////////////////////////////////


// createMultiplier returns a function that
// will accept a parameter and multiply it by
// createMultiplier's parameter
function createMultiplier(x) {

  // return a function that multiples the new paramater y
  // by the stored paramater x
  return function (y) {
      return x * y;
  };
}

// these varables hold the function returned above, holding the x value in memory
doubler = createMultiplier(2);
tripler = createMultiplier(3);

// use the functions, and accept the parameter y
console.log('8 doubler firing: ' + doubler(50));
console.log('8 tripler firing: ' + tripler(33));


/////////////////////////////////////////////////////

// this will be used to demonstrate .bind()
function multiplier(x, y) {
  console.log('9 X: ', x, "Y: ", y);

  return x * y;
}


// bind is bypassing null at the moment (it will eventually represent 'this')
// and assigning the second parameter to the first parameter, x
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

// now the parameters below will get assigned to y
console.log('10 doubler with bind: ' + doublerWithBind(10));
console.log('10 tripler with bind: ' + triplerWithBind(10));


//////////////////////////////////////////////////////////////////////////////

//CLOSURES

// this is the closure function

// closures lock the scope to that particular function
// when it was defined

// closures are functions
// that remember the environment in which they were created
// are they the opposite of callbacks?  no!

// this function 'closes over' the min variable
function checkage(min){
  // it will return a function that checks a new age parameter
  // against the closed over minimum variable
	return function (age) {
		return (age >= min);
	};
}

// this is one environment:
// this will set var min to 21
// within this variable environment
var minageinUSA = checkage(21);
console.log('11: ' + minageinUSA(17)); // false
console.log('11: ' + minageinUSA(22)); // true


// this is the second environment, setting min to 15
var minageinwhoknowswhere = checkage(15);
console.log('12: ' + minageinwhoknowswhere(17)); // true
console.log('12: ' + minageinwhoknowswhere(22)); // true


var cat = parseInt("24hello");
console.log(cat);

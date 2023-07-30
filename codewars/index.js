function toplama(a, b) {
  return a + b;
}

function cixma(a, b) {
  return a - b;
}

function vurma(a, b) {
  return a * b;
}

// function bolme(a, b) {
//   return a / b;
// }

// function kalkulaytor() {
//   var a = Number(prompt("1 ci ededi daxil edin:"));
//   var b = Number(prompt("2 ci ededi daxil edin:"));
//   var operator = prompt("opeartor daxil edin:");

//   if (operator === "+") {
//     return toplama(a, b);
//   } else if (operator === "-") {
//     return cixma(a, b);
//   } else if (operator === "/") {
//     return bolme(a, b);
//   } else if (operator === "*") {
//     return vurma(a, b);
//   } else {
//     return 0;
//   }
// }

// var netice = kalkulaytor();
// console.log(netice);
// var name = "netice";
// class User {
//   name = "username";

//   getName = () => {
//     return this.name;
//   };
// }

// u = new User();
// console.log(u.getName());

// const user = {
//   normal: function () {
//     console.log(this);
//   },
//   arrow: () => {
//     console.log(this);
//   },
// };

// user.normal();
// user.arrow();

// var a = 50;
// switch (a) {
//   case a > 3:
//     console.log(a);
//     break;

//   default:
//     break;
// }

// const result = setTimeout(getTime(), 20000);
// const result = setInterval(getTime(), 20000);

// function getTime() {
//   console.log("Hello world");
// }

// setInterval(() => {
//   console.log("Ok");
// }, 5000)

function getOk(n) {
  var liters = n * 3.7854;
  var gas = n / liters;
}

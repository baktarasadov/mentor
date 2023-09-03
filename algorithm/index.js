// function alma(x) {
//   var padnos = [];
//   for (var i = 2; i <= x; i++) {
//     if (i % 2 == 0) {
//       padnos.push(i);
//     }
//   }
//   return padnos;
// }

// console.log(alma(12));

function isPrime(x) {
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
      return true;
    }
  }
  return false;
}

// function foo(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(foo(21));
// console.log(isPrime(211));

// function alma(armud) {
//   for (let i = 2; i < armud; i++) {
//     if (armud % i === 0) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(alma(21));

// function A(number) {
//   var a = [];
//   if (number > 1) {
//     if (number == 2) {
//       console.log("sade");
//       return "Sade ededdir";
//     } else {
//       for (let i = 1; i <= number; i++) {
//         if (number % i == 0) {
//           a.push("1");
//         }
//       }
//       if (a.length <= 2) {
//         console.log("sade");
//         return "Sade";
//       } else if (a.length > 2) {
//         console.log("murekkeb");
//         return "murekkeb";
//       }
//     }
//   } else {
//     return "1-den yuxari eded daxil edin";
//   }
// }

// console.log(A(5));

// ""
// aLmA
// function alma(soz) {
//   var padnos = [];
//   for (var herf of soz) {
//     var kicikHerf = herf.toLowerCase();
//     if (herf == kicikHerf) {
//       padnos.push(herf.toUpperCase());
//     } else {
//       padnos.push(herf.toLowerCase());
//     }
//   }
//   return padnos.join("");
// }

// console.log(alma("AlMa"));

// function alma(soz) {
//   // var dongu = soz.length - 1; //4-1 3
//   // var bosqab = "";
//   // do {
//   //   bosqab = bosqab + soz[dongu];
//   //   dongu--;
//   // } while (dongu >= 0);
//   // return bosqab == soz;
//   return soz.split("").reverse().join("") == soz;
// }

// console.log(alma("alma"));

function alma(reqem) {
  var sum = 0;
  while (reqem > 0) {
    var qaliq = reqem % 10;
    sum += qaliq;
    reqem = parseInt(reqem / 10);
  }
  return sum;
}

console.log(alma(456));

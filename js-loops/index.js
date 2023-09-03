// const array = [2, 3, 4, 5, 6];
// console.log(array.reverse());
// const array2 = [];
// for (var i = array.length - 1; i >= 0; i--) {
//   array2.push(array[i]);
// }
// console.log(array2);

// ----------------------------------------------------------------
// const soz = prompt("zehmet olmasa sozu daxil edin"); // "alma" 'a' 'l' 'm' 'a'
// let sozunTersi = "";
// for (var i = soz.length - 1; i >= 0; i--) {
//   sozunTersi = sozunTersi + soz[i];
//   //    ""=""+"a"
//   //    "a"="a"+"m"
//   //    "am"="am"+"l"
//   //    "aml"="aml"+"a"
// }
// if (sozunTersi == soz) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// console.log(sozunTersi);

// for (var i = 2; i <= 11; i++) {
//   for (var j = 2; j <= 11; j++) {
//     console.log(`${i} x ${j} = ${i * j}`); 1*1 1*2 1*3 1*11
//   }
//   console.log(
//     "----------------------------------------------------------------"
//   );
// }
// const array = [1, 2, 3, 4, 5, 6]; 5
// let alma = 0;
// let cem = 0;
// do {
//   cem = cem + array[2];
//   0=0+1
//   1=1+2
//   3=3+4
//   alma++;
//   3
// } while (alma < array.length); 5

// console.log(cem);

// let length = 0;
// const array = "  salama Azerbaycn ok       ";
// while (true) {
//   if (!array[length]) break;
//   length++;
// }
// console.log(array.charCodeAt());
// console.log(!!array);
// const removeTrim = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] !== " ") break;
//   removeTrim.push(array[i]);
// }
// for (let i = array.length - 1; i > 0; i--) {
//   if (array[i] !== " ") break;
//   removeTrim.push(array[i]);
// }

// let newString = "";

// console.log(array.length);
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === removeTrim[i]) continue;
//   newString += array[i];
// }

// console.log(newString.length);

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// var eded = prompt("zehmet olmasa ededi daxil edin:");
// for (var i = 0; i < array.length; i++) {
//   if (eded == array[i]) {
//     alert("eded movcutdur");
//     break;
//   }
// }

const array = ["Zaur", "Elcan", "Togrul", "eziz", "Bekter"];
const array2 = [];
// for (let i = 0; i < array.length; i++) {
//   var string = array[i];
//   var sonuncuHerf = string[string.length - 1];
//   if (sonuncuHerf == "r") {
//     array2.push(string);
//   }
// }

for (var element of array) {
  if (element.slice(-1) == "r") {
    array2.push(element);
  }
}
console.log(array2);
var alma = "Alma";

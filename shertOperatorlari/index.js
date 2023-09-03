// var a = 59;
// var b = 41;
// // console.log(a + " + " + b + " = " + (a + b));
// // console.log(`${a}+${b} = ${a + b}`);
// // console.log(`rfrgrii43hug34uhg3hjrgjh4rgh4`);
// // console.log(`salam "dfewfefe"`);
// // console.log(` ${a ? "efee":"efefergr"}`);

// // var alma = false;
// // if (alma == false) {
// //   console.log("Ok");
// // } else {
// //   console.log("not ok");
// // }
// var ay = 10;
// // if (ay > 1) {
// //   console.log("Yanvar");
// // } else if (ay == 2) {
// //   console.log("Fevral");
// // }

// var a = 40;
// var b = 60;

// var netice = a > b ? "beli boyukdur" : "xeyr boyuk deyil.";

// console.log(netice);
// let alma = 1;
// while (alma <= -1) {
//   console.log(alma);
//   alma++;
// }

// do {
//   console.log(alma);
//   alma++;
// } while (alma <= -1);

var adlar = ["Togrul", "Elshad", "Namiq", "Ismayil"];
var filterAd = [];
let alma = 0;
while (alma < adlar.length) {
  if (adlar[alma] == "Togrul") {
    alma++;
    continue;
  } else if (adlar[alma] == "Namiq") {
    break;
  } else {
    filterAd.push(adlar[alma]);
  }
  alma++;
}

console.log(filterAd);

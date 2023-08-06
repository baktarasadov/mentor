// var reqem = prompt("Zehmet olmasa ededi daxil edin:");
// if (reqem % 2 == 0 && reqem % 5 == 0) {
//   alert("daxil elediyiniz eded 2 ye ve 5e tam bolunur");
// } else if (reqem % 2 == 0) {
//   alert(" daxil elediyiniz eded 2 ye tam bolunur");
// } else if (reqem % 5 == 0) {
//   alert("daxil elediyiniz eded 5 e tam bolunur");
// } else {
//   alert("daxil elediyiniz eded 2 ye ve 5e tam bolunmur");
// }

// var eded = prompt("Elgun ededi daxil ele");
// if (eded < 0) {
//   console.log(-1);
// } else if (eded == 0) {
//   console(0);
// } else {
//   console.log(1);
// }

// var netice = eded < 0 ? -1 : eded > 0 ? 1 : eded == 5 ? 5 : eded == 10 ? 10 : 0;
// console.log(netice);

// var herf = prompt("Zehmet olmasa herf daxil edin");
// if (herf == "a" || herf == "e" || herf == "i" || herf == "o" || herf == "u") {
//   alert("Siz sait daxil etmisiz");
// } else {
//   alert("Siz samit daxil etmisiz");
// }

// var a = "aeuio";
// var input = prompt("herfi daxil edin zehmet olmas");
// var bosluguSil = input.trim();
// var kicikHerfeCevir = bosluguSil.toLowerCase();
// var alma = a.includes(kicikHerfeCevir) ? "Sait" : "Samit";
// console.log(alma);

// var evvelkiAdi = prompt("evvelki adinizi daxil edin");
// var evvelkiSifresi = prompt("password adiniiz daxil edin:");
// var trimhaliAdin = evvelkiAdi.trim();
// var boyukherflerleAd = trimhaliAdin.toUpperCase();
// var trimHaliSifrenin = evvelkiSifresi.trim();
// if (trimhaliAdin.length < 3 || trimHaliSifrenin.length < 8) {
//   alert("Adiniz ve ya sifreniz  uygun deyil");
// } else {
//   var sonrakiAdi = prompt("Sonraki Adinizi daxil edin zehmet olmasa");
//   var sonrakiSifresi = prompt("Sonraki Sifrenizi daxil edin zehmet olmasa");
//   if (
//     boyukherflerleAd == sonrakiAdi.toLocaleUpperCase() &&
//     evvelkiSifresi == sonrakiSifresi
//   ) {
//     alert("Seyfemize xos geldiniz! ");
//   } else {
//     alert("Zehmet olmasa adiniz ve ya sifrenizi duzgun daxil");
//   }
// }

// var a = null;
// console.log(a / 5);
// function splitAndMerge(string, separator) {
//   let newString = "";
//   for (const element of string.split("")) {
//     newString += `${separator}${element}`;
//   }
//   return newString.split(`${separator} ${separator}`).join(" ").substring(1);
// }
// console.log(splitAndMerge("My name is John", "."));

// const split = [];
// const property = "Azer";
// const string = "    Azerbaijan  ";
// while (true) {
//   if (!string[length]) break;
//   split[length] = string[length];
//   length++;
// }
// console.log(split);

// const trim = "    Azerbaijan   ";
// let newString = "";
// let length = 0;
// while (true) {
//   if (!trim[length]) break;
//   if (trim[length] === " ") continue;
//   newString += trim[length];
//   length++;
// }
// let start = 0;

// // while (true) {
// //   if (trim[start] !== " ") break;
// //   newString += trim[start];
// //   start++;
// // }
// console.log(newString);

// var a = parseFloat(prompt(" 1 ci ededi daxil edin:"));
// var b = parseFloat(prompt(" 2 ci ededi daxil edin:"));
// var c = prompt("emeliyyati daxil edin: +,-,/,*");
// if (c === "+") {
//   console.log(`${a} + ${b} = ${a + b}`);
// } else if (c === "-") {
//   console.log(`${a} - ${b} = ${a - b}`);
// } else if (c === "/") {
//   console.log(`${a} / ${b} = ${a / b}`);
// } else if (c === "*") {
//   console.log(`${a} * ${b} = ${a * b}`);
// } else {
//   alert(" qardasimsan operatoru duzgun daxil et!");
// }

// var herf = prompt(" herfi daxil edin:");
// var sait = "aeiou";
// var samit = "qwrtysd";
// if (sait.includes(herf)) {
//   alert(`${herf} saitdir`);
// } else if (samit.includes(herf)) {
//   alert(`${herf} samitdir`);
// } else {
//   alert("qardasimsan duzgun ehrf daxil elee");
// }
// var deyer = prompt("zehmet olmasa deyeri daxil et");
// if (deyer % 2 == 0 && deyer % 5 == 0) {
//   alert(`${deyer} 2 ye ve 5 e tam bolunur`);
// } else if (deyer % 5 == 0) {
//   alert(`${deyer} 5 e tam bolunur`);
// } else if (deyer % 2 == 0) {
//   alert(`${deyer} 2 e tam bolunur`);
// } else {
//   alert(`${deyer} hec birine bolunmur`);
// }

// var borcum = -250;
// console.log(`borcum: ${borcum}`);
// var pulum = parseFloat(prompt(" borcu daxil ele:"));
// var sonunc = borcum + pulum;
// if (sonunc >= 0) {
//   alert(`borc tamamlandi qalig pulunuz ${sonunc}`);
// } else {
//   alert(`borc di qalig pulunuz biz borcunuz ${sonunc}`);
// }

const array = ["bekter", "nadir", "Ramazan"];

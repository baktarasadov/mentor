// function alma(gulleninSayi, ejdahaninSayi) {
//   var armud = ejdahaninSayi * 2;
//   if (gulleninSayi >= armud) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(alma(10, 6));

// function hero(bullets, dragons) {
//   if (dragons * 2 <= bullets) {
//     return true;
//   } else {
//     return false;
//   }
//   //Get Coding!
// }

// function alma(soz1, soz2, soz3) {
//   //   soz1 = "alma";
//   //   soz2 = "alim";
//   //   soz3 = "avar";
//   //   netice = "aaallvmiaamr";
//   var bosqab = "";
//   for (var i = 0; i < soz1.length; i++) {
//     bosqab = bosqab + soz1[1]; //aaal
//     bosqab = bosqab + soz2[i]; //aa
//     bosqab = bosqab + soz3[i]; ///aaa
//   }
//   return bosqab;
// }

// console.log(alma("alma", "alim", "avar"));

// 3 19
// [3,6,,9,,12,15,18]
// function alma(baslangic, sonuncu) {
//   var padnos = [];
//   for (var i = baslangic; i <= sonuncu; i = i + baslangic) {
//     padnos.push(i);
//   }
//   return padnos;
// }

// console.log(alma(3, 19));
// function array(string) {
//   const padnos = string.split(",");
//   const padnos2 = [];
//   console.log(padnos);
//   for (let i = 1; i < padnos.length - 1; i++) {
//     padnos2.push(padnos[i]);
//   }
//   console.log(padnos2);
// }

// array("o,r,x,a,n");

// alma(5,6)  1 0 -1
// function alma(bes, alti) {
//   if (bes > alti) {
//     return 1;
//   } else if (alti === bes) {
//     return 0;
//   }
//   return -1;
// }

// function yas(yas) {
//   if (yas > 18) {
//     return "SEYFEMIZE XOSH GELMISIZ";
//   }
//   return "seyfemizden redol";
// }
// let a = "Torgrul";
// let b = "ule";
// console.log(a.includes(b));
// function armud(qarpuz, nar) {
//   return qarpuz.includes(nar);
// }
// Salam men bekter esedov  menim yasim 23 dir.
// function yas(il, ad) {
//   let hazirkiIl = 2023;
//   // return `Salam men ${ad} menim yasim ${hazirkiIl - il} dir`;
//   return "Salam men " + ad + "menim yasim" + (hazirkiIl - il) + "dir";
// }
// console.log(yas(2000, "Togrul"));
function tailSwap(arr) {
  let first = arr[0].split(":")[1];
  let second = arr[1].split(":")[1];
  console.log(first, second);
  let newArr = [];
  newArr.push(arr[0].split(":")[0] + `: ${second}`);
  newArr.push(arr[1].split(":")[0] + `: ${first}`);
  return newArr;
}

function twoArePositive(a, b, c) {
  return [a, b, c].filter((e) => e > 0).length == 2;
}

console.log(twoArePositive(-4, 6, 8));

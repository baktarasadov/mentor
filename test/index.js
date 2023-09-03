// const button = document.getElementById("button");
// const ul = document.getElementById("ul");
// const li = document.createElement("li");
// li.innerHTML = "Alma";
// const li2 = document.createElement("li");
// li2.innerText = "<strong>Alma</strong>";
// ul.append(li, li2);
// button.onclick = function () {
//   console.log("onclick Ok");
// };
// button.onclick = function () {
//   console.log("onclick Not");
// };

// button.addEventListener("click", function () {
//   console.log("AddeventListener Ok");
// });
// button.addEventListener("click", function () {
//   console.log("AddeventListener Not Ok");
// });

const a = document.getElementById("a");
a.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Ok");
});
// const ul = document.getElementById("ul");

// button.addEventListener("click", function (e) {
//   //   e.stopImmediatePropagation();
//   e.stopPropagation();

//   console.log("Ok");
// });
// // button.addEventListener("click", function () {
// //   console.log("Not Ok");
// // });

// ul.addEventListener("click", function (e) {
//   //   e.stopImmediatePropagation();
//   console.log("Ul");
// });

function alma() {
  return { name: "alma", ok: [2, 3, 5, 6] };
}
function armud() {
  return "armud";
}

function* myGenerator() {
  // Jeneratörün gövdesi
  yield alma();
  yield armud();
  yield 3;
}

// Jenersatör nesnesi oluşturulur
// const generator = myGenerator();
// for (let element of generator) {
//   console.log(element);
// }

// // Jeneratör nesnesini kullanarak değerler üretilir
// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 2, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: undefined, done: true }

function* ok(a, b) {
  yield `a: ${a}`;
  yield `b: ${b}`;
  yield `toplama: ${a + b}`;
  yield `cixma: ${a - b}`;
  yield `bolme: ${a / b}`;
  yield `vurma: ${a * b}`;
}

const x = ok(4, 5);
for (var i in x) {
  console.log(x[i]);
}

// console.log(x.next());

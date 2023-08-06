const input = document.querySelector(".input");
const btnAdd = document.querySelector(".btnAdd");
const todoContext = document.querySelector(".newTodoText ul");

let array = [];

btnAdd.addEventListener("click", (e) => {
  newInput = input.value.trim();
  if (newInput.length <= 20) {
    if (!input.value.trim() == "") {
      array.push(newInput);
      todoContext.innerHTML = "";
      for (let i = 0; i < array.length; i++) {
        let li = document.createElement("li");
        let btnDelete = document.createElement("button");
        btnDelete.classList.add("btnDelete");
        li.innerHTML = array[i];
        btnDelete.innerHTML = "delete";
        li.append(btnDelete);
        todoContext.append(li);
        console.log(todoContext);
        input.value = "";
      }
    } else {
      alert("zehmet olmasa text daxil edin");
      input.value = "";
    }
  } else {
    alert("yaziniz cox uzundu");
  }
});

const deletteBtn = document.querySelector("btnDelete");

deletteBtn.addEventListener("click", () => {
  array = array.filter((e) => e);
});

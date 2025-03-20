document.getElementById("addTask").addEventListener("click", function () {
  addTask();
});

document
  .getElementById("taskInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });

  let taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("sil-buton");
  deleteBtn.textContent = "Sil";
  deleteBtn.addEventListener("click", function(){
    li.remove();
  })

  li.appendChild(checkbox);
  li.appendChild(taskLabel);
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
    }
}







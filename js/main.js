function addTask() {
    var inputElement = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (inputElement.value !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputElement.value));

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Удалить"));
        deleteButton.onclick = function () {
            this.parentNode.remove();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        inputElement.value = "";
    }
}
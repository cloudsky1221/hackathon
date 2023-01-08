const date = new Date

const checkBox = document.querySelectorAll("input");
const resourceTitle = document.querySelector("#resource-title");
const resourceUrl = document.querySelector("#resource-url");
const resourceBody = document.querySelector("#resource-body");
const motivationTitle = document.querySelector("#motivation-title");
const motivationUrl = document.querySelector("#motivation-url");
const motivationBody = document.querySelector("#motivation-body");
const noteInput = document.querySelector("#note");
const addResource = document.querySelector("#add-resource");
const addMotivation = document.querySelector("#add-motivation");
const saveNote = document.querySelector("#save-note");
const taskSubmit = document.querySelector("#task-submit");
const firstTask = document.querySelector("#first");
const secondTask = document.querySelector("#second");


addResource.addEventListener("click", () => {
    addingToList(resourceTitle.value,resourceUrl.value,resourceBody)
})
addMotivation.addEventListener("click", () => {
    addingToList(motivationTitle.value,motivationUrl.value,motivationBody)
})

taskSubmit.addEventListener("click", () => {
    if (firstTask.value != 0 && secondTask.value != 0) {
        alert("good job")
    }
})

saveNote.addEventListener("click", () => {
    noteInput.value = "";
})

function addingToList(title, url, body) {
    const titleOfText = document.createElement("div");
    titleOfText.innerText = `${title}`;
    const anchor = document.createElement("a");
    anchor.setAttribute("href",`${url}`);
    anchor.innerText = `${url}`;
    body.appendChild(titleOfText);
    body.appendChild(anchor)
}
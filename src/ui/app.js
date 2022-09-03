const { ipcRenderer } = require("electron");

const clientForm = document.querySelector("#productForm");
const clientName = document.querySelector("#name");
const clientWeight = document.querySelector("#weight");
const clientComment = document.querySelector("#comment");

clientForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newClient = {
    name: clientName.ariaValueMax,
    weight: clientWeight.value,
    comment: clientComment.value,
  };
});

function clickSave() {
  ipcRenderer.send("msg", "hello from render proces");
  alert("button clicked");
}

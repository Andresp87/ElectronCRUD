const { ipcRenderer } = require("electron");

const clientForm = document.querySelector("#productForm");
const clientName = document.querySelector("#name");
const clientWeight = document.querySelector("#weight");
const clientComment = document.querySelector("#comment");

function clickSave(newClient) {
  ipcRenderer.send("msg", newClient);
}

clientForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newClient = {
    name: clientName.value,
    weight: clientWeight.value,
    comment: clientComment.value,
  };
  clickSave(newClient);
});

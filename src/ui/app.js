const { ipcRenderer } = require("electron");

const clientForm = document.querySelector("#productForm");
const clientName = document.querySelector("#name");
const clientWeight = document.querySelector("#weight");
const clientComment = document.querySelector("#comment");

// function getAllClients() {
//   ipcRenderer.send("getAllClientsMsg");
// }

function clickSave() {
  if (
    clientName.value.trim() === "" ||
    clientWeight.value.trim() === "" ||
    clientComment.value.trim() === ""
  ) {
    alert("Todos los campos deben estar llenos");
  } else {
    const newClient = {
      name: clientName.value,
      weight: clientWeight.value,
      comment: clientComment.value,
    };
    ipcRenderer.send("createClientMsg", newClient);

    console.log(newClient);
    clientForm.reset();
  }

  const printResults = ipcRenderer.send("getAllClientsMsg");

  console.log(printResults);
}

clientForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// ipcRenderer.send("getAllClientsMsg");

// ipcRenderer.on("response", (e, args) => {
//   console.log(e);
//   console.log(args);
// });

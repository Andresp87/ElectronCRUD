const { BrowserWindow, ipcMain, Notification } = require("electron");
const dotenv = require("dotenv");
const { insertData, getAllData } = require("./connection");

dotenv.config();

function createWindow() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  window.loadFile("src/ui/index.html");
  window.webContents.openDevTools();
}

function getAllClients() {
  let result;
  try {
    result = getAllData();
  } catch (error) {
    console.log(error);
  }

  return result;
}

function createClient(client) {
  try {
    insertData(client);

    new Notification({
      title: "New client notification",
      body: "New client saved succesfully",
    });
  } catch (error) {
    console.log(error);
  }
}

ipcMain.on("getAllClientsMsg", (e, args) => {
  const result = getAllData();
  e.reply("response", result);
});

ipcMain.on("createClientMsg", (event, data) => {
  createClient(data);
});

module.exports = { createWindow };

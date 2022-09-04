const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const dotenv = require("dotenv");
const { getConnection } = require("../connection");

dotenv.config();

ipcMain.on("msg", (event, data) => {
  createClient(data);
});

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

function createClient(client) {
  const connectionMongoDB = getConnection();
  console.log(client);
}

module.exports = {
  createWindow,
  // createClient,
};

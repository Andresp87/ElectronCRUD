const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const dotenv = require("dotenv");

dotenv.config();

ipcMain.on("msg", (event, data) => {
  console.warn(data);
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

module.exports = {
  createWindow,
};

const { app, BrowserWindow } = require("electron");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const connection = require("./db/connection");
require("electron-reload")(__dirname);

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  window.loadFile("src/ui/index.html");
  window.webContents.openDevTools();
};

// Quit app when all windows are closed
app.on("window-all-closed", app.quit);

app.whenReady().then(createWindow);

// ipcMain.on("getAllClientsMsg", (e, args) => {
//   const result = getAllData();
//   e.reply("response", result);
// });

// ipcMain.on("createClientMsg", (event, data) => {
//   createClient(data);
// });

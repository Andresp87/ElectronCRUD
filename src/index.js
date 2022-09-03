const {createWindow} = require('./main');
const {app, BrowserWindow, ipcMain} = require('electron');

require ('../connection');

require ('electron-reload')(__dirname);

app.whenReady().then(createWindow);

const { app, BrowserWindow } = require('electron');
const path = require('path');  // Require the path module to specify the preload script path.

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 700,
        webPreferences: {
            nodeIntegration: true, // Enable nodeIntegration.
            contextIsolation: false, // Disable contextIsolation.
        }
    });

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit(); // Close the app when all windows are closed, except on macOS.
});

app.on('activate', function () {
    if (mainWindow === null) createWindow(); // On macOS, recreate the app window if the dock icon is clicked and no other windows are open.
});

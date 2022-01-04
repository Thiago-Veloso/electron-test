const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    frame: false,
    icon: path.join(__dirname, `/icon.png`)
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/electron-test/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );
  // Open the DevTools.
  // win.webContents.openDevTools();

  win.on("closed", function () {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (win === null) createWindow();
});

const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1000,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  Menu.setApplicationMenu(null)
  win.setIcon(path.join(__dirname, 'assets', 'icons', 'png', '64x64.png'))
  win.loadFile('index.html')

}
// ...
app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(){
  const win = new BrowserWindow({
    width:1280,
    height:800,
    backgroundColor:'#0b0f14',
    webPreferences:{
      preload:path.join(__dirname,'preload.js'),
      contextIsolation:true,
      nodeIntegration:false,
      sandbox:true
    }
  });
  win.removeMenu?.();
  win.loadFile('index.html');
}

app.whenReady().then(()=>{
  app.commandLine.appendSwitch('disable-features','OutOfBlinkCors');
  createWindow();
});
app.on('window-all-closed',()=>{ if(process.platform!=='darwin') app.quit(); });
app.on('activate',()=>{ if(BrowserWindow.getAllWindows().length===0) createWindow(); });

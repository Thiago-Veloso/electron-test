import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'electron-test';

  constructor(public electronService: ElectronService) {}

  public minimizeWindow() {
    if (this.electronService.isElectronApp)
      this.electronService.remote.BrowserWindow.getFocusedWindow()?.minimize();
  }

  public closeWindow() {
    if (this.electronService.isElectronApp)
      this.electronService.remote.BrowserWindow.getFocusedWindow()?.close();
  }

  public maximizeWindow() {
    if (this.electronService.isElectronApp) {
      if (
        this.electronService.remote.BrowserWindow.getFocusedWindow()?.isMaximized()
      )
        this.electronService.remote.BrowserWindow.getFocusedWindow()?.unmaximize();
      else
        this.electronService.remote.BrowserWindow.getFocusedWindow()?.maximize();
    }
  }
}

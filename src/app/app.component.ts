import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'electron-test';

  constructor(public electronService: ElectronService) {
    console.log(this.electronService.isElectronApp);
  }

  public minimizableWindow() {
    if (this.electronService.isElectronApp) {
      console.log(this.electronService.remote.BrowserWindow);
      this.electronService.remote.BrowserWindow.getFocusedWindow()?.minimize();
    }
  }
}

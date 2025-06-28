import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopSidebarComponent } from './sidebar/desktop-sidebar/desktop-sidebar.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [DesktopSidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'moneyhub-v2';
}

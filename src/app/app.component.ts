import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopSidebarComponent } from './sidebar/desktop-sidebar/desktop-sidebar.component';
import { MainComponent } from './main/main.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DesktopSidebarComponent, MainComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'moneyhub-v2';
  sidebarOpen = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

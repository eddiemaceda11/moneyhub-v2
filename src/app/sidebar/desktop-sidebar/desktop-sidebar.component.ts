import { Component, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-desktop-sidebar',
  //imports: [NgClass],
  templateUrl: './desktop-sidebar.component.html',
  styleUrl: './desktop-sidebar.component.scss',
})
export class DesktopSidebarComponent {
  sidebarOpen = true;
  @Output() sidebar = new EventEmitter();

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebar.emit(!this.sidebarOpen);
  }
}

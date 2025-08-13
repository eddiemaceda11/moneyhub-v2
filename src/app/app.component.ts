import { Component, OnInit, OnDestroy } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { DesktopSidebarComponent } from './sidebar/desktop-sidebar/desktop-sidebar.component';
import { MainComponent } from './main/main.component';
import { NgClass } from '@angular/common';
import { TransactionsService } from './services/transactions.service';
import { AddSinkingFundComponent } from './ui/modals/sinking-funds/add-sinking-fund/add-sinking-fund.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { ServiceService, User } from './services/service.service';

@Component({
  selector: 'app-root',
  imports: [
    DesktopSidebarComponent,
    //MainComponent,
    NgClass,
    AddSinkingFundComponent,
    RouterOutlet,
    //RouterLink,
    //RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'moneyhub-v2';
  sidebarOpen = true;
  // users!: User[];
  transactions!: [];

  // constructor(private transactionsService: TransactionsService) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleModal() {}

  // ngOnInit() {
  //   this.transactionsService
  //     .getTransactions()
  //     .subscribe((data) => console.log(data));

  // this.serviceService.getUsers().subscribe((data) => console.log(data));
  // this.serviceService.getUserById(1).subscribe((data) => console.log(data));
  // }
}

import { Component } from '@angular/core';
import { DashboardSinkingFundsComponent } from './dashboard/components/dashboard-sinking-funds/dashboard-sinking-funds.component';

@Component({
  selector: 'app-main',
  imports: [DashboardSinkingFundsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}

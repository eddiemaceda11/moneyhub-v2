import { Component } from '@angular/core';
import { DashboardSinkingFundsComponent } from './dashboard/components/dashboard-sinking-funds/dashboard-sinking-funds.component';
import { DashboardTransactionsComponent } from './dashboard/components/dashboard-transactions/dashboard-transactions.component';
import { DashboardBudgetsComponent } from './dashboard/components/dashboard-budgets/dashboard-budgets.component';

@Component({
  selector: 'app-main',
  imports: [
    DashboardSinkingFundsComponent,
    DashboardTransactionsComponent,
    DashboardBudgetsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}

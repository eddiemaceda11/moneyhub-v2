import { Component } from '@angular/core';
import { DashboardSinkingFundsComponent } from './components/dashboard-sinking-funds/dashboard-sinking-funds.component';
import { DashboardTransactionsComponent } from './components/dashboard-transactions/dashboard-transactions.component';
import { DashboardBudgetsComponent } from './components/dashboard-budgets/dashboard-budgets.component';
import { DashboardUpcomingPaymentsComponent } from './components/dashboard-upcoming-payments/dashboard-upcoming-payments.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardSinkingFundsComponent,
    DashboardTransactionsComponent,
    DashboardBudgetsComponent,
    DashboardUpcomingPaymentsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}

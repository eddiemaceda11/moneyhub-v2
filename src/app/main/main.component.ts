import { Component } from '@angular/core';
import { DashboardSinkingFundsComponent } from './dashboard/components/dashboard-sinking-funds/dashboard-sinking-funds.component';
import { DashboardTransactionsComponent } from './dashboard/components/dashboard-transactions/dashboard-transactions.component';
import { DashboardBudgetsComponent } from './dashboard/components/dashboard-budgets/dashboard-budgets.component';
import { DashboardUpcomingPaymentsComponent } from './dashboard/components/dashboard-upcoming-payments/dashboard-upcoming-payments.component';
import { RouterOutlet } from '../../../node_modules/@angular/router/router_module.d-Bx9ArA6K';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}

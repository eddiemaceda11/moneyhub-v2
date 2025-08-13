import { Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { TransactionsComponent } from './main/transactions/transactions.component';
import { BudgetsComponent } from './main/budgets/budgets.component';
import { SinkingFundsComponent } from './main/sinking-funds/sinking-funds.component';
import { UpcomingBillsComponent } from './main/upcoming-bills/upcoming-bills.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
  {
    path: 'budgets',
    component: BudgetsComponent,
  },
  {
    path: 'sinking-funds',
    component: SinkingFundsComponent,
  },
  {
    path: 'recurring',
    component: UpcomingBillsComponent,
  },
];

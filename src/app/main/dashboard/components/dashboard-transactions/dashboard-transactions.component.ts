import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionsService } from '../../../../services/transactions.service';
import { CommonModule } from '@angular/common';
import { map, pipe } from 'rxjs';

type Transaction = {
  amount: string;
  budgetId?: number;
  categoryId?: number;
  createdAt: Date;
  description: string;
  id: number;
  isRecurring: boolean;
  notes?: string;
  sinkingFundId?: number;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
  updatedAt: Date;
  userId: number;
};

@Component({
  selector: 'app-dashboard-transactions',
  imports: [CommonModule],
  templateUrl: './dashboard-transactions.component.html',
  styleUrl: './dashboard-transactions.component.scss',
})
export class DashboardTransactionsComponent implements OnInit {
  dashboardTransactions: Transaction[] = [];
  loadingCards: number[] = [1, 2, 3, 4];

  constructor(private transactionsService: TransactionsService) {}

  formatDate(date: Date): string {
    // convert TIMESTAMPTZ string from PostgreSQL to JS Object
    const dateObject = new Date(date);

    // Format as "DD/Mon/Year"
    return dateObject.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  ngOnInit() {
    this.transactionsService
      .getTransactions()
      .subscribe((data) => (this.dashboardTransactions = data));
  }
}

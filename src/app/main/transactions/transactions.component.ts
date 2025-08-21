import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { transactions } from './transactions';

type Pagination = {
  start: number;
  end: number;
};

@Component({
  selector: 'app-transactions',
  imports: [FormsModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  transactionSearchValue: string = '';
  sortOption = 'lowest';
  category = 'all';
  currentPagination: Pagination = { start: 0, end: 10 };
  filteredTransactions = transactions;

  formatCurrency(value: string | number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value));
  }

  changeSortByOption(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.sortOption = select.value;
    this.setPagination();
  }

  changeCategoryOption(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.category = select.value;
    this.setPagination();
  }

  setPagination() {
    this.currentPagination = { start: 0, end: 10 };
  }

  handleNextOrPrevPagination(
    direction: 'next' | 'prev',
    itemsPerPage: number = 10
  ) {
    const pageSize = itemsPerPage;

    if (direction === 'next') {
      if (this.currentPagination.end >= this.filteredTransactions.length)
        return;

      const newPaginationStart = this.currentPagination.start + pageSize;
      const newPaginationEnd = this.currentPagination.end + pageSize;
      this.currentPagination.start = newPaginationStart;
      this.currentPagination.end = newPaginationEnd;
    }

    if (direction === 'prev') {
      if (this.currentPagination.start < pageSize) return;

      const newPaginationStart = this.currentPagination.start - pageSize;
      const newPaginationEnd = this.currentPagination.end - pageSize;
      this.currentPagination.start = newPaginationStart;
      this.currentPagination.end = newPaginationEnd;
    }
  }
}

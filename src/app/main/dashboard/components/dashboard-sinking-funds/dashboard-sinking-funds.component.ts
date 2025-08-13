import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinkingFundsService } from '../../../../services/sinking-funds.service';

type SinkingFund = {
  categoryIcon: string;
  createdAt: string;
  currentAmount: string;
  id: string;
  isArchived: boolean;
  monthlyContribution?: number;
  name: string;
  targetAmount: string;
  targetDate?: string;
  updatedAt: string;
  userId: string;
};

@Component({
  selector: 'app-dashboard-sinking-funds',
  imports: [CommonModule],
  templateUrl: './dashboard-sinking-funds.component.html',
  styleUrl: './dashboard-sinking-funds.component.scss',
})
export class DashboardSinkingFundsComponent implements OnInit {
  dashboardSinkingFunds: SinkingFund[] = [];

  constructor(private sinkingFundsService: SinkingFundsService) {}

  addNewFund() {
    const newFund = {
      id: '15',
      userId: '1',
      name: 'Test',
      targetAmount: '1',
      currentAmount: '5',
      monthlyContribution: null,
      categoryIcon: '#fff',
      isArchived: false,
    };

    this.sinkingFundsService
      .addSinkingFund(newFund)
      .subscribe((res) => console.log(res));
  }

  ngOnInit() {
    this.sinkingFundsService
      .getSinkingFunds()
      .subscribe((data) => console.log(data));

    this.sinkingFundsService
      .getSinkingFund(3)
      .subscribe((data) => console.log(data));

    setTimeout(() => {
      console.log('fund created');
      this.addNewFund();
    }, 5000);
  }
}

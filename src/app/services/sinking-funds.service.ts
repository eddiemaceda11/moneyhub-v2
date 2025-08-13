import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root',
})
export class SinkingFundsService {
  url = 'http://localhost:3010/dashboard/sinking-funds';

  constructor(private http: HttpClient) {}

  getSinkingFunds(): Observable<SinkingFund[]> {
    return this.http.get<SinkingFund[]>(this.url);
    //.pipe(map((response) => response));
  }

  getSinkingFund(id: number): Observable<SinkingFund> {
    return this.http.get<SinkingFund>(`${this.url}/${id}`);
  }

  addSinkingFund(fund: any) {
    return this.http.post(`${this.url}`, fund);
  }
}

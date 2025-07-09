import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  url = 'http://localhost:3010/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<any[]> {
    return this.http.get<[]>(this.url).pipe(map((response) => response));
  }

  getTransaction(id: number): Observable<[]> {
    return this.http.get<[]>(`${this.url}/${id}`);
  }
}

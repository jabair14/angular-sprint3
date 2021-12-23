import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from './loan/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }


  getLoans(): Observable<any> {
    return this.http.get("http://localhost:8082/api/funds")
  }

  getLoan(id: number): Observable<any> {
    return this.http.get("http://localhost:8082/api/funds/"+id)
  }

  deleteLoan(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8082/api/funds/${id}`)
  }

  updateLoan(id: number, newLoan: any) {
    return this.http.patch(`http://localhost:8082/api/funds/${id}`, newLoan)
  }

  createLoan(newLoan: any): Observable <any> {
    console.log("this is on createLoan", newLoan)
    // const headers = {'content-type': 'application/json'}
    //  const body = JSON.stringify(newLoan)
    //  console.log(JSON.stringify(body))
    return this.http.post("http://localhost:8082/api/funds", newLoan)
  }
}

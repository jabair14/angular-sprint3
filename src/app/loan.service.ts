import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  createLoan(newLoan: any){
    return this.http.post("http://localhost:8082/api/funds", newLoan)
  }
}

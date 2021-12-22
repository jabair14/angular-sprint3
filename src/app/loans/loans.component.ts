import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loan } from '../loan/loan.model';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  constructor(private loanService: LoanService) { }

  loans:Loan[] = [];

  ngOnInit(): void {
    this.loanService.getLoans().subscribe(
      payload => {
        this.loans = payload
      }
    )
  }

}

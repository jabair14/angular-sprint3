import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoanService } from '../loan.service';
import { Loan } from '../loan/loan.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  loans: Loan[] = [];

  // loan: Loan = {
  //   id: undefined
  // }

  newLoan: any = {
    name: "",
    age: 0,
    occupation: "",
    birthday: "",
    houseStatus: "",
    rentCost: 0,
    yearlyNetIncome: 0,
    requestedLoanAmount: 0,
    approvedLoan: 0,
    id: 0
  }

  constructor( private router: Router,
      private loanService: LoanService,
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.loanService.getLoans().subscribe(
      payload => {
        this.loans = payload
        console.log(payload)
      }
    )
  }

  onCreateLoan(newLoan: any) {
    this.loanService.createLoan(newLoan).subscribe(payload => {
      this.newLoan = payload
      console.log("this is onCreateLoan Payload=", payload)
    })
    this.ngOnInit
    this.router.navigateByUrl("/loans")
  }

}

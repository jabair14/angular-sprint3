import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';
import { Loan } from './loan.model';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  loan:Loan = {};

  constructor(private route:ActivatedRoute, private loanService: LoanService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const myid = +params['id'];
      this.loanService.getLoan(myid).subscribe(payload => {
        console.log( "this is in loan.components", payload)
        this.loan = payload
      })
    })
  }

  onDeleteLoan(id: number) {
    this.loanService.deleteLoan(id).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

}

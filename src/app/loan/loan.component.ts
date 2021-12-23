import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { Loan } from './loan.model';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  loan:Loan = {
    id: 0
  };

  newLoan: any = {
    age: "",
    requestedLoanAmount: "",
    approvedLoan: "",
  }

  show = false;

  constructor(private route:ActivatedRoute, private loanService: LoanService, 
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const myid = +params['id'];
      this.loanService.getLoan(myid).subscribe(payload => {
        console.log( "this is the payload", payload)
        this.loan = payload
      })
    })
  }

  reloadCurrentPage() {
    window.location.reload()
  }

  onDeleteLoan(id: number) {
    this.loanService.deleteLoan(id).subscribe(
      data => {
        if (data) {
          this.router.navigateByUrl("/loans")
        }
        this.ngOnInit();
      }) 
  }

  onUpdateLoan(id:number, newLoan:any) {
    this.loanService.updateLoan(id, newLoan).subscribe(
      (res) => console.log("updated response", res)
    )
    this.show = false;
    this.ngOnInit();
    this.reloadCurrentPage()  
  }
}

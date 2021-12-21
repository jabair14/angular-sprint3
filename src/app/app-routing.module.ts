import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './loan/loan.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {path: "loans", component: LoansComponent},
  {path: "loans/:id", component: LoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

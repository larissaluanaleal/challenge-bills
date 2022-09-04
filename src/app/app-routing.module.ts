import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsComponent } from './financial/components/bills/bills.component';

const routes: Routes = [
  { path: "contas", component: BillsComponent },
  { path: "", redirectTo: "/contas", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

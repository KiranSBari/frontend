import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllPoliciesComponent } from './policy/all-policies/all-policies.component';
import { PolicyinsertingComponent } from './policy/policyinserting/policyinserting.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


export const routes:Routes=[
  { path:'policies',component:AllPoliciesComponent},
  { path:'insertpolicy',component:PolicyinsertingComponent}
];


@NgModule({
  declarations: [
    AllPoliciesComponent,
    PolicyinsertingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    AllPoliciesComponent,
    PolicyinsertingComponent
  ]

})
export class CrmModule { }

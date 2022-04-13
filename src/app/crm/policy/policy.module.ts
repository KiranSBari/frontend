import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPoliciesComponent } from './all-policies/all-policies.component';
import { PolicyinsertingComponent } from './policyinserting/policyinserting.component';
import { FormsModule } from '@angular/forms';
import { AlertmessageComponent } from './policyinserting/alertmessage/alertmessage.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';

export const routes:Routes=[
  { path:'policies',component:AllPoliciesComponent},
  { path:'insertpolicy',component:PolicyinsertingComponent}
];

@NgModule({
  declarations: [
    AllPoliciesComponent,
    PolicyinsertingComponent,
    AlertmessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    AllPoliciesComponent,
  ]
})
export class PolicyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPoliciesComponent } from './all-policies/all-policies.component';
import { PolicyinsertingComponent } from './policyinserting/policyinserting.component';



@NgModule({
  declarations: [
    AllPoliciesComponent,
    PolicyinsertingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PolicyModule { }

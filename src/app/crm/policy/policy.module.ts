import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPoliciesComponent } from './all-policies/all-policies.component';
import { PolicyinsertingComponent } from './policyinserting/policyinserting.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllPoliciesComponent,
    PolicyinsertingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AllPoliciesComponent,
  ]
})
export class PolicyModule { }

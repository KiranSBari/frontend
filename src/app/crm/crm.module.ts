import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllPoliciesComponent } from './policy/all-policies/all-policies.component';
import { PolicyinsertingComponent } from './policy/policyinserting/policyinserting.component';



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
    AllPoliciesComponent
  ]

})
export class CrmModule { }

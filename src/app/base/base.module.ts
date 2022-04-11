import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HederComponent } from './heder/heder.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { CrmModule } from '../crm/crm.module';
import { RouterModule, Routes } from '@angular/router';
import { AllPoliciesComponent } from '../crm/policy/all-policies/all-policies.component';
import { GetcomplaintComponent } from '../crm/complaint/getcomplaint/getcomplaint.component';

export const routes:Routes=[
      
  { path:'', redirectTo:'policies',pathMatch:'full'},
  // { path:'home',component:HomeComponent},
  { path:'policies',component:AllPoliciesComponent},
  { path:'complaints',component:GetcomplaintComponent},
];

@NgModule({
  declarations: [
    HederComponent,
    FooterComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    CrmModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    ContainerComponent
  ]
})
export class BaseModule { }




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HederComponent } from './heder/heder.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { CrmModule } from '../crm/crm.module';
import { RouterModule, Routes } from '@angular/router';
import { GetcomplaintComponent } from '../crm/complaint/getcomplaint/getcomplaint.component';
import { HomeComponent } from './home/home.component';
import { PolicyinsertingComponent } from '../crm/policy/policyinserting/policyinserting.component';
import { AllPoliciesComponent } from '../crm/policy/all-policies/all-policies.component';

export const routes:Routes=[
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'policies',component:AllPoliciesComponent,children:[{path:'insertpolicy',component:PolicyinsertingComponent}]},
  { path:'complaints',component:GetcomplaintComponent},
];


@NgModule({
  declarations: [
    HederComponent,
    FooterComponent,
    ContainerComponent,
    HomeComponent
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




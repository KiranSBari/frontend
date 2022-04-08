import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HederComponent } from './heder/heder.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { CrmModule } from '../crm/crm.module';



@NgModule({
  declarations: [
    HederComponent,
    FooterComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    CrmModule
  ],
  exports:[
    ContainerComponent
  ]
})
export class BaseModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    CustomerRoutingModule,
    SharedModule
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent
  ],
  exports: [
    CustomerComponent,
    CustomerComponent
  ]
})
export class CustomerModule { }

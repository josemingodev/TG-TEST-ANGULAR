import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    CustomerRoutingModule,
    SharedModule
  ],
  declarations: [CustomerComponent],
  exports: [CustomerComponent]
})
export class CustomerModule { }

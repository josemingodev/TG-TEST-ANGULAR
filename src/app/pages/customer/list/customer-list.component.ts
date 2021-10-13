import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/models/customer/customer';

import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers!: Customer[];

  constructor(customerService: CustomerService) { }

  ngOnInit() { }
}

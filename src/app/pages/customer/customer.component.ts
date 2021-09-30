import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/models/customer/customer';

import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  data!: Customer[];

  constructor(private customerService: CustomerService) {
    customerService.list().subscribe(
      data => {
        console.log(data);
        this.data = data;
      }
    );
  }

  ngOnInit() {
  }

}

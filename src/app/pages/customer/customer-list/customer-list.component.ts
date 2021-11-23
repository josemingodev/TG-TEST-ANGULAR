import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { NzTableSortFn } from 'ng-zorro-antd/table';
import { SaleService } from 'src/app/services/sale/sale.service';
import { Sale } from 'src/app/models/sale/sale';
import { Product } from 'src/app/models/product/product';
import { Line } from 'src/app/models/sale/line';

interface FilterList {
  name: string;
  compare:  NzTableSortFn<Customer> | null;
  priority: false;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

export class CustomerListComponent implements OnInit {
  customers!: Customer[];
  sales!: any;
  salesCustomerSelected!: Sale[];
  product!: Product[];
  filterListCustomer!: FilterList[];
  filterListSales!: FilterList[];
  customerSelected: number;
  lines!: Line[];
  constructor(
    private customerService: CustomerService,
    private saleService: SaleService,
    ) {
    this.salesCustomerSelected = []
    this.customerSelected = 0;
    this.filterListCustomer = [
      {
        name: 'Customer ID',
        compare: (a: Customer, b: Customer) => a.CustomerId - b.CustomerId,
        priority: false

      },
      {
        name: 'Name',
        compare: (a: Customer, b: Customer) => a.Name.localeCompare(b.Name),
        priority: false
      },
      {
        name: 'Email Address',
        compare: (a: Customer, b: Customer) => a.EmailAddress.localeCompare(b.EmailAddress),
        priority: false
      }
    ]
  }
  groupArrayOfObjects(list:any, key:any) {
    return list.reduce((rv:any, x:any) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  ngOnInit() {
   this.customerService.list().subscribe(res =>{
      this.customers = res;
    })
    this.saleService.list().subscribe(res =>{
      this.sales = this.groupArrayOfObjects(res,'CustomerId');
    })
  }
  select(CustomerId:number){
    if(CustomerId !== this.customerSelected){
      this.salesCustomerSelected = []
      this.customerSelected = CustomerId
      if( this.sales[this.customerSelected]){
        this.sales[this.customerSelected]!.forEach((sale: Sale) => {
          this.salesCustomerSelected.push(sale)
        });
      }
    }
  }
}

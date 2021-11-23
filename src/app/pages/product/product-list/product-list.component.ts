import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';

interface FilterList {
  name: string;
  compare:  NzTableSortFn<Product> | null;
  priority: false;
  sortOrder: NzTableSortOrder | null;

}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  filterList!: FilterList[];
  constructor(private productService: ProductService) {
    this.filterList = [
      {
        name: 'Product ID',
        compare: (a: Product, b: Product) => a.ProductId - b.ProductId,
        priority: false,
        sortOrder : null
      },
      {
        name: 'Name',
        compare: (a: Product, b: Product) => a.Name.localeCompare(b.Name),
        priority: false,
        sortOrder : null

      },
      {
        name: 'Price',
        compare: (a: Product, b: Product) => a.Price - b.Price,
        priority: false,
        sortOrder : 'descend'

      },
      {
        name: 'Weight',
        compare: (a: Product, b: Product) =>  a.Weight - b.Weight,
        priority: false,
        sortOrder : null

      }
    ]
   }

  ngOnInit(): void {
    this.productService.list().subscribe(res =>{
      this.products = res;
    })
  }

}

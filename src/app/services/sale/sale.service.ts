import { Injectable } from '@angular/core';

import sales from '../../data/sale/sale.json';

import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';

@Injectable({
    providedIn: 'root'
})
export class SaleService {
    list(): Observable<Customer[]> {
        // TODO:
        return new Observable();
    }
}

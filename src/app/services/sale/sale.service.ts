import { Injectable } from '@angular/core';

import sales from '../../data/sale/sale.json';
import { Observable } from 'rxjs';
import { Sale } from 'src/app/models/sale/sale';

@Injectable({
    providedIn: 'root'
})
export class SaleService {
    list(): Observable<Sale[]> {
        return new Observable<Sale[]>(
            observable => {
                const data: Sale[] = [];
                sales.forEach(
                    (sale: Sale) => {
                        const saleAux = new Sale().build(sale)
                        saleAux.calculateTotalPrice();
                        saleAux.calculateTotalWeight();
                        data.push(saleAux);
                    }
                );
                observable.next(data);
            }
        );
    }
}

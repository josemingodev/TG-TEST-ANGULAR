import { Sale } from "../sale/sale";

export class Customer {
    CustomerId!: number;
    Name!: string;
    EmailAddress!: string;
    Sales!: Sale[]
    Address!: string;
    Phone!: string
    build(content: any): Customer {
        Object.assign(this, content);

        return this;
    }
}

import { Line } from "./line";

export class Sale {
    SaleID!: number;
    CustomerId!: string;
    TotalPrice!: number;
    TotalWeight!: number;
    Lines!: Line[];
    Expand!: boolean;
    build(content: any): Sale {
        Object.assign(this, content);
        return this;
    }
    calculateTotalPrice(): void{
        this.Lines.forEach(e =>{
            this.TotalPrice += e.Price
            console.log(this.TotalPrice)

        })
    }
    calculateTotalWeight():void{
        this.Lines.forEach(e =>{
            this.TotalWeight += e.Weight
        })  
    }
}
export class Product {
    ProductId!: number;
    Name!: string;
    Color!: string;

    build(content: any): Product {
        Object.assign(this, content);

        return this;
    }
}

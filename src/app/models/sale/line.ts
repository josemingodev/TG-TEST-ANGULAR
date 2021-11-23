export class Line {
    ProductId!: number
    ProductName!: number
    Units!: number
    Price!: number
    Weight!: number
    build(content: any): Line {
        Object.assign(this, content);
        return this;
    }
}
export class Entry {
    public readonly category: string;
    public readonly date: Date;
    public readonly price: number;
    public readonly details: string;

    constructor(category: string, date: Date, price: number, details: string) {
        this.category = category;
        this.date = date;
        this.price = price;
        this.details = details;
    }
 }
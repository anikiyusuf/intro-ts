// Classes/
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return (`${this.client} owes #${this.amount} for ${this.details}`);
    }
}
const InvOne = new Invoice('Yusuf', 'work on the mario website', 250);
const InvTwo = new Invoice('Yusuf', "work on the wsebsite", 400);
let invoice = [];
invoice.push(InvOne);
invoice.push(InvTwo);
invoice.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

import {Formatter } from "../interface/Formatter"


// Classes/
export class Invoice  implements Formatter{
        constructor(
 readonly   client:string,
 private  details:string,
 public  amount: number
    ){
    }
    format(){
        return (`${this.client} owes #${this.amount} for ${this.details}`)
    }
}

const InvOne = new Invoice ('Yusuf' , 'work on the mario website' , 250)
const InvTwo = new Invoice('Yusuf', "work on the wsebsite", 400)

let invoice: Invoice[] = []
invoice.push(InvOne);
invoice.push(InvTwo);


invoice.forEach(inv => {
    console.log(inv.client, inv.amount , inv.format())
})
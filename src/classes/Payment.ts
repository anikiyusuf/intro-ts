import {Formatter } from "../interface/Formatter"


// Classes/
export class Payment  implements Formatter{
        constructor(
 readonly   recipient :string,
 private  details:string,
 public  amount: number
    ){
    }
    format(){
        return (`${this.recipient}  is owed #${this.amount} for ${this.details}`)
    }
}


import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { Formatter } from "./interface/Formatter.js";

// let docOne : Formatter;
// let docTwo: Formatter;

// docOne = new Invoice("Yusuf" , "web site" , 300)
// docTwo =  new Payment ("Aniki" , "App" , 400)

// let docs: Formatter[] = []
// docs.push(docOne)
// docs.push(docTwo)




const form = document.querySelector(".new-item-form") as HTMLFormElement

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement
const toForm = document.querySelector("#toform ") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as  HTMLInputElement

// LIst template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)


form.addEventListener('submit', (e) =>{
          e.preventDefault();
// Tuples
        //   let values: [string, string, number ];
        // values   = (toForm.value , details.value,  amount.valueAsNumber)
        
          let doc: Formatter;
          if (type.value === 'invoice'){
            // doc = new Invoice(...values) Tuples
            doc = new Invoice (toForm.value , details.value,  amount.valueAsNumber)
          }else {
            // doc = new Payment(...values)  Tuples
            doc = new Payment (toForm.value , details.value,  amount.valueAsNumber)
          }
          list.render(doc , type.value , 'end')
} )







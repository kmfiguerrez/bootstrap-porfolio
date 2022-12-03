import * as util from "./funcs.js";

// fwc means first word container.
const fwc = document.getElementById("first-word");
// fwc means second word container.
const swc = document.getElementById("second-word");
// const toDisplay = "JAVASCRIPT DEVELOPER";
// jtc means job title container.
const jtc = document.getElementById("job-title");
const jobTitles = ["IT SPECIALIST", "WEB DEVELOPER"];

const display = async () => {
    while (true) {
        for (const job of jobTitles) {            
            // console.log(job)
            const dRes = await util.displayText(job, fwc, swc);
            // console.log(dRes);
            const sRes = await util.sleep(3000);
            // console.log(sRes);        
            const rRes = await util.removeText(fwc, swc);
            // console.log(rRes);                    
        }    
    }            
}

display();



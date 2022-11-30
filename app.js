import * as util from "./funcs.js";

// fwc means first word container.
const fwc = document.getElementById("first-word");
// fwc means second word container.
const swc = document.getElementById("second-word");
// const toDisplay = "JAVASCRIPT DEVELOPER";
// jtc means job title container.
const jtc = document.getElementById("job-title");
const greeting = document.getElementById("greeting");
const jobTitles = ["IT SPECIALIST", "WEB DEVELOPER"];


let stopDisplay = false;

greeting.addEventListener("click", () => {
    stopDisplay = true;
})

// const display = async () => {
//     for (const job of jobTitles) {
//         console.log(job)
//         const dRes = await util.displayText(job, fwc, swc);
//         console.log(dRes);
//         const sRes = await util.sleep(3000);
//         console.log(sRes);        
//         if (job === jobTitles[jobTitles.length - 1]) {
//             console.log("ayo!")
//             break;
//         }
//         const rRes = await util.removeText(fwc, swc);
//         console.log(rRes);        
//     }        
// }

const display = async () => {
    while (!stopDisplay) {
        for (const job of jobTitles) {
            
            // console.log(job)
            const dRes = await util.displayText(job, fwc, swc);
            // console.log(dRes);
            const sRes = await util.sleep(3000);
            // console.log(sRes);        
            const rRes = await util.removeText(fwc, swc);
            // console.log(rRes);
            if (stopDisplay) {
                break;
            }        
        }    
    }            
}

display();



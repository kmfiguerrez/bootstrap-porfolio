const fakePromise = () => {
    return new Promise((resolve, reject) => {
        const res = true;
        setTimeout(() => {
            if (res === false) {
                reject("Hell nah! Reject!");
            }
            // Otherwise
            resolve("aiighht you good!");
        }, 5000)
    })
}


// fakePromise()
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(res => {
    //     console.log(res);
    // })

const fake = new Promise((resolve, reject) => {
    const res = true;
        setTimeout(() => {
            if (res === false) {
                reject("Hell nah! Reject!");
            }
            // Otherwise
            resolve("aiighht you good!");
        }, 5000)
})    

// fake.then(res => console.log("yo!", res))
//     .catch(res => console.log(res))

const dis = async () => {
    await fake;
    console.log();
    console.log("What da faq is the deal!")
}

const displayText = function(text) {
    const spaceIndex = text.indexOf(" ");
    // Include the space in the first word.
    const firstWord = text.slice(0, spaceIndex + 1);
    const secondWord = text.slice(spaceIndex + 1); 
    
    let currentWordContainer = fwc;
    let currentWord = firstWord;
    let count = 0;

    const interval = setInterval(() => {
        // Get each character in the currenword.
        const char = currentWord[count];
        // Create a span element and append the char.
        const span = createSpanElement(char);
        // Append the span element to its container.
        currentWordContainer.append(span);
        // Move to the next character.
        count++;
        console.log(span);
        // If we're done with the first word then
        // move to the next word.
        if (count === currentWord.length && currentWord === firstWord) {
            currentWordContainer = swc;
            currentWord = secondWord;
            count = 0;
        }

        // If we're done with the second word then
        // we clear the setInterval.
        if (count === currentWord.length && currentWord === secondWord) {
            console.log("Done Displaying!")
            clearInterval(interval);
        }

    }, 500);
}

const removeDisplay = () => {
    // Start from the second word.
    // The containers contain a word.
    let currentWord = swc
    // Child list contains an array of sibling span elements.
    let childList = currentWord.childNodes

    const interval = setInterval(() => {
        console.log(currentWord.lastChild.firstChild.nodeValue);
        // Remove the last span element from the child list.
        currentWord.removeChild(currentWord.lastChild);
    
        console.log(childList.length);
    
        // After removing the second word we pass the next word
        // to be removed.
        if (childList.length === 0 && currentWord === swc) {
            // Update the currentWord.
            currentWord = fwc;
            // Update the child list.
            childList = currentWord.childNodes
            console.log(currentWord)
            console.log(childList.length)
            console.log(currentWord.lastChild)        
        }
        // If the first word is finished then we clear the interval
        // so that the setInterval will cancels the timed.
        if (childList.length === 0  && currentWord === fwc) {
            console.log("Done removing the display!");
            clearInterval(interval);
        }
    }, 1000)
}


// while (childList.length !== 0) {
//     console.log(swc.lastChild.firstChild.nodeValue);
//     swc.removeChild(swc.lastChild);
//     // Update child list.
//     // childList = swc.childNodes;
//     // console.log(childList.length);
// }
// console.dir(swc.lastChild.firstChild.nodeValue)



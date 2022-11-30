const createSpanElement = function (char) {
    /**
     * Creates an element with text node.
     * Argument must be a string
     */

    try {
        if (typeof char !== "string") throw new Error("Argument must be a string!");

        // Create element
        const span = document.createElement("span");
        // Create text node.
        const textNode = document.createTextNode(char);
        // Add the text to the span element.
        span.appendChild(textNode);
        // Return span element
        return span;
    } catch (error) {
        console.log(error);
    }
}



const displayText = (text, firstWordContainer, secondWordContainer) => {
    return new Promise((resolve, reject) => {

        const spaceIndex = text.indexOf(" ");
        // Include the space char in the first word.
        const firstWord = text.slice(0, spaceIndex + 1);
        // Does not include the space char.
        const secondWord = text.slice(spaceIndex + 1); 
        
        // Display first the first word.
        let currentWordContainer = firstWordContainer;
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

            // console.log(span);

            // If we're done with the first word then
            // move to the next word.
            if (count === currentWord.length && currentWord === firstWord) {
                currentWordContainer = secondWordContainer;
                currentWord = secondWord;
                count = 0;
            }

            // If we're done with the second word then
            // we clear the setInterval.
            if (count === currentWord.length && currentWord === secondWord) {
                // console.log("Done Displaying!")            
                clearInterval(interval);
                resolve("Done Displaying!");
            }        

        }, 100);
    })
}



const removeText = (firstWordContainer, secondWordContainer) => {
    return new Promise((resolve, reject) => {

        // Start from the second word.
        // The containers contain a word.
        let currentWord = secondWordContainer
        // Child list contains an array of sibling span elements.
        let childList = currentWord.childNodes

        const interval = setInterval(() => {
            // console.log(currentWord.lastChild.firstChild.nodeValue);
            // Remove the last span element from the child list.
            currentWord.removeChild(currentWord.lastChild);
        
            // console.log(childList.length);
        
            // After removing the second word we pass the next word
            // to be removed.
            if (childList.length === 0 && currentWord === secondWordContainer) {
                // Update the currentWord.
                currentWord = firstWordContainer;
                // Update the child list.
                childList = currentWord.childNodes
                // console.log(currentWord)
                // console.log(childList.length)
                // console.log(currentWord.lastChild)        
            }
            // If the first word is finished then we clear the interval
            // so that the setInterval will cancels the timed.
            if (childList.length === 0  && currentWord === firstWordContainer) {
                // console.log("Done removing the display!");
                clearInterval(interval);
                resolve("Done removing the display!");
            }
        }, 100)
    })
}

const sleep = async (delay) => {
    /**
     * Delay must be in milliseconds.
     */
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done sleeping!")
        }, delay)
    })    
}

export { createSpanElement, displayText, removeText, sleep };
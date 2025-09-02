1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : getElementById is returns the single element with the given unique ID, and getElementsByClassName is returns a live collection of all elements with a given class.
querySelector is returns the first element that matches a CSS selector and querySelectorAll is returns a static list of all elements matching a CSS selector.

2. How do you create and insert a new element into the DOM?
Ans : document.createElement("div") // Ekta div block tag create korsi
newDiv.innerText = "Hello" // content set korsi
parent.appendChild(newDiv) // newDiv er content DOM y insert korlam

3. What is Event Bubbling and how does it work?
Ans : Event Bubbling is when an event starts from the deepest child element that was interacted with and then bubbles up through its parent elements until it reaches the root document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Event Delegation is a technique where instead of attaching event listeners to multiple child elements, you attach a single event listener to a common parent, and use event bubbling to handle events for the children.
Useful for Performance, Dynamic elements, Cleaner code.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : preventDefault() don’t do the browser’s default action.
stopPropagation() don’t pass this event to parent handlers.
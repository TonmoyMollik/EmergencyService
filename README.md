1:getElementById is used to select a unique element by its ID. There should be only one element with that ID.

getElementsByClassName is used to select elements by their class name. It can select multiple elements.

querySelector is used to select the first element that matches any CSS selector (ID, class, or tag).

querySelectorAll is used to select all elements that match a CSS selector (ID, class, or tag).

2:Use document.createElement() to create a new HTML element.
You can set text, HTML, or attributes for the new element.
newParagraph.textContent = "Hello, I am a new paragraph!";
Use one of these methods to insert the element into the DOM:
document.body.appendChild(newParagraph);

3:Event Bubbling is a JavaScript event-handling process where an event first occurs on the direct target element and then gradually bubbles up to its parent elements (up the DOM tree)
Simply put, when an event happens on a child element, it automatically propagates to its parent elements until it reaches the root of the DOM or the body.

4:Efficiency: Instead of adding many listeners to multiple elements, you add only one listener on the parent. This reduces memory usage and improves performance.

Dynamic Elements: It works for elements that are added to the DOM after the page has loaded, because the event listener on the parent will still catch events from newly added children.

Simpler Code: Managing events becomes easier since you don’t need to attach or remove listeners for each individual child element.

5:preventDefault()

This method prevents the default action of an element from happening.

It does not stop the event from bubbling or propagating.

Common use cases: preventing form submission, preventing a link from navigating, or stopping a checkbox from changing state temporarily.
stopPropagation()

This method stops the event from bubbling up (or capturing down) the DOM.

It does not prevent the element’s default behavior.

Common use cases: stopping a click on a child element from triggering parent event handlers.

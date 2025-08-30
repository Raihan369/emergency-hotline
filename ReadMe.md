## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

Answer :

getElementById("id") => finds one element by its id and always return a single element (or null if not found)

getElementsByClassName("class") => finds all element by class name and returns a live html collection

querySelector("selector") => finds all element match a css selector (id,class,tag)

querySelectorAll("selector") => finds all elements that match a CSS selector and return a static nodeList

## 2. How do you create and insert a new element into the DOM?

Answer: 
    1) element create : let newDiv = document.createElement("div");
    2) add content : newDiv.textContent = "Hello, I am abdur rahman";
    3) Insert into DOM : document.body.appendChild(newDiv);

## 3. What is Event Bubbling and how does it work?

Answer : 
    Event bubbling :  when anyone click  an element, the event starts from that element and then bubbles up to its parent, then grandparent, and so on, up to the document

    Html : <div id="parent">
            <button id="child">Click Me</button>
            </div>

    Javascript : 

            document.getElementById("child").addEventListener("click", () => {
                console.log("Child clicked");
                });

                document.getElementById("parent").addEventListener("click", () => {
                console.log("Parent clicked");
                });

                document.body.addEventListener("click", () => {
                console.log("Body clicked");
                });


## 4. What is Event Delegation in JavaScript? Why is it useful?

Answer : 

    Event Delegation : It is a technique where anyone attach one event listener to a parent element instead of adding listeners to many child elements.The event then bubbles up, and the parent can check which child triggered it.

    Example : 

    Html :  <ul id="list">
                <li>Apple</li>
                <li>Banana</li>
                <li>Mango</li>
                </ul>

    JavaScript:
            document.getElementById("list").addEventListener("click", function(event) {
                if (event.target.tagName === "LI") {
                    console.log("You clicked:", event.target.textContent);
                }
                });

USeful cause : 

    1) Performance = fewer event listeners cause saves memory

    2) Dynamic elements = works for new child elements added later

    3) Cleaner code = one parent listener instead of many



## 5. What is the difference between preventDefault() and stopPropagation()?

Answer: 

    preventDefault() => stops browser's default behavior (like submit, link, refresh)

    ex: clicking link but not open url

    js :
            document.querySelector("a").addEventListener("click", function(event) {
            event.preventDefault(); 
            console.log("Default action prevented!");
            });

    stopPropagation() => stops the event from bubbling up or going to parents

    ex: a button inside a div won't trigger the div's click listener

    js: 
        document.getElementById("child").addEventListener("click", function(event) {
        event.stopPropagation(); 
        console.log("Child clicked only!");
        });

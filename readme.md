# Asynchronous Programming Exercises


## Overview


This repository contains a series of JavaScript exercises focusing on different asynchronous programming techniques such as callbacks, promises, and async/await. The exercises integrate API calls to display data from the JSONPlaceholder API.

## Exercises


### Part 1: Callbacks
-------------

#### Task 1: HTML and CSS
Created an HTML file named "callbacks.html" with basic structure and styling.

#### Task 2: Callback Implementation
Implemented JavaScript functionality that utilizes a callback function to simulate a delay of 5 seconds when a button is clicked. Updated the text in a div element to display "Callback executed after 5 seconds" after the delay.

#### Task 3: Fetch Data from API
Modified the callback implementation to fetch data from the JSONPlaceholder API (posts endpoint). Displayed the fetched data (post titles) in the div element after the callback is executed.

### Part 2: Promises
-------------

#### Task 1: HTML and CSS
Created an HTML file named "promises.html" with basic structure and styling.

#### Task 2: Promise Implementation
Implemented JavaScript functionality that creates a Promise to fetch data from the JSONPlaceholder API (posts endpoint). Displayed "Loading..." in a div element while the Promise is pending and updated the text to show the fetched data once the Promise is resolved.

#### Task 3: Error Handling
Implemented error handling for the Promise. If the Promise takes longer than 5 seconds to resolve, it is rejected with a message like "Operation timed out." Displayed the error message in the div element if the Promise is rejected.

### Part 3: Async/Await
-------------

#### Task 1: HTML and CSS
Created an HTML file named "async-await.html" with basic structure and styling.

#### Task 2: Async/Await Implementation
Implemented JavaScript functionality that uses async/await to fetch data from the JSONPlaceholder API (posts endpoint). Displayed "Loading..." in a div element while the data is being fetched and updated the text to show the fetched data once it is received.

#### Task 3: Error Handling
Implemented error handling for the async/await implementation. Handled errors such as network issues or timeouts gracefully and displayed error messages in the div element.

## Files
--------

* `callbacks.html`: HTML file for callbacks exercise
* `callbacks.css`: CSS file for styling
* `callbacks.js`: JavaScript file for callbacks exercise


* `promises.html`: HTML file for promises exercise
* `promises.css`: CSS file for styling
* `promises.js`: JavaScript file for promises exercise


* `async_await.html`: HTML file for async/await exercise
* `async_await.css`: CSS file for styling
* `async_await.js`: JavaScript file for async/await exercise



## API
----

* JSONPlaceholder API: [https://dummyjson.com/posts](https://dummyjson.com/posts)

## Submission Guidelines
-------------------------

* This repository contains all HTML, CSS, and JavaScript files for the exercises.
* Code is readable and organized, with appropriate comments for complex sections.
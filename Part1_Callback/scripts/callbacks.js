// Get the button and div elements
const callbackBtn = document.getElementById('callback-btn');
const callbackDiv = document.getElementById('callback-div');

// I Define a callback function that will be executed after a delay
function callbackFunction() {
    callbackDiv.innerText = 'Callback executed after 5 seconds';
}

// I Define a function that simulates a delay of 5 seconds
function delayCallback(callback, delay) {
    setTimeout(callback, delay);
}

// Add an event listener to the button
callbackBtn.addEventListener('click', function() {
    // Call the delayCallback function with the callbackFunction and a delay of 5 seconds
    delayCallback(callbackFunction, 5000);
});

// Task 3: Fetch data from API
function fetchDataFromAPI(callback) {
    const apiUrl = 'https://dummyjson.com/posts';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const postTitles = data.posts.map(post => post.title);
            callback(postTitles);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Modify the callback implementation to fetch data from the API
function callbackFunctionWithData() {
    fetchDataFromAPI(postTitles => {
        callbackDiv.innerText = postTitles.join(', ');
    });
}

// Update the event listener to call the callbackFunctionWithData
callbackBtn.addEventListener('click', function() {
    delayCallback(callbackFunctionWithData, 5000);
});
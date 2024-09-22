// Get the button and data container elements
const fetchDataBtn = document.getElementById('fetch-data-btn');
const dataContainer = document.getElementById('data-container');

// Add an event listener to the button to trigger the data fetch
fetchDataBtn.addEventListener('click', fetchData);

// Function to fetch data from the API using a Promise
function fetchData() {
    // Display a loading message while the Promise is pending
    dataContainer.innerText = 'Loading...';

    // I create a new Promise with a timeout of 5 seconds
    const promise = new Promise((resolve, reject) => {
        // Set a timeout to reject the Promise after 5 seconds
        const timeoutId = setTimeout(() => {
            reject('Operation timed out.');
        }, 5000);

        // Fetch data from the JSONPlaceholder API
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                // Clear the timeout if the data is received within 5 seconds
                clearTimeout(timeoutId);
                // Resolve the Promise with the fetched data
                resolve(data);
            })
            .catch(error => {
                // Clear the timeout if an error occurs
                clearTimeout(timeoutId);
                // Reject the Promise with the error
                reject(error);
            });
    });

    // Handle the resolved Promise
    promise.then(data => {
        // Extract the post titles from the fetched data
        const postTitles = data.posts.map(post => post.title).join('\n');
        // Update the text to show the fetched data
        dataContainer.innerText = postTitles;
    })
    // Handle the rejected Promise
    .catch(error => {
        // Display the error message in the data container
        dataContainer.innerText = `Error: ${error}`;
    });
}
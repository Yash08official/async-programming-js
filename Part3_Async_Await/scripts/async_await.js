// Get  the button and div elements
const fetchDataBtn = document.getElementById("fetch-data-btn");
const dataContainer = document.getElementById("data-container");

// Add an event listener to the button to trigger the fetch data functionality
fetchDataBtn.addEventListener("click", async () => {
  try {
    // Display "Loading..." while data is being fetched
    dataContainer.textContent = "Loading...";

    // Set a timeout to handle cases where the fetch operation takes too long
    const timeoutId = setTimeout(() => {
      // Throw an error if the fetch operation takes longer than 5 seconds
      throw new Error("Operation timed out.");
    }, 5000);

    // Fetch data from the API
    const response = await fetch("https://dummyjson.com/posts");

    // Clear the timeout if the data is received within 5 seconds
    clearTimeout(timeoutId);

    // Check if the response is OK
    if (!response.ok) {
      // Throw an error if the response is not OK
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // convert response data into JSON
    const data = await response.json();

    // Extract the post titles from the response data
    const postTitles = data.posts.map((post) => post.title).join(", ");

    // Display the fetch data in the div element
    dataContainer.textContent = postTitles;
  } catch (error) {
    // Handle errors that occur during the fetch operation
    if (error.message === "Failed to fetch") {
      // Display an error message if there is a network issue
      dataContainer.textContent =
        "Error: Network issue. Please check your internet connection.";
    } else if (error.message === "Operation timed out.") {
      // Display an error message if the operation timed out
      dataContainer.textContent =
        "Error: Operation timed out. Please try again.";
    } else if (error.message.startsWith("HTTP error!")) {
      // Display an error message if there is an HTTP error
      dataContainer.textContent = `Error: ${error.message}`;
    } else {
      // Display a generic error message for any other error
      dataContainer.textContent = `Error: ${error.message}`;
    }
  }
});

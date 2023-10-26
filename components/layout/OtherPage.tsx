// TypeScript for the bottom bar behavior

// Function to navigate to the new page
function navigateToNewPage() {
    // Replace "your-new-page.html" with the actual URL of the page you want to link to
    window.location.href = "your-new-page.html";
}

// Event listener to trigger the navigation when the button is clicked
const button = document.getElementById("go-to-new-page-button");
if (button) {
    button.addEventListener("click", navigateToNewPage);
}

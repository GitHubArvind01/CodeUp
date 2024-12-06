 // Check if the loader was displayed
 if (!sessionStorage.getItem('loaderDisplayed')) {
    // Redirect to the loader page if the loader has not been displayed
    window.location.href = 'index.html';
} else {
    // Clear the loader flag to ensure the loader shows again on refresh
    sessionStorage.removeItem('loaderDisplayed');
}

 // Handle mobile-specific refresh behaviors
 window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // If the page was loaded from the browser cache, ensure the loader logic still works
        if (!sessionStorage.getItem('loaderDisplayed')) {
            window.location.href = 'index.html';
        }
    }
});
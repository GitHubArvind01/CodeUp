 // Set the loader displayed flag in session storage
 sessionStorage.setItem('loaderDisplayed', 'true');

 // Redirect to the main page after a delay
 setTimeout(function() {
     window.location.href = 'Main.html';
 }, 5000); // 5 seconds delay
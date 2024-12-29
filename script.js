// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Add event listener to toggle the theme when the button is clicked
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark' class on the body element to switch themes
    document.body.classList.toggle('dark');

    // Change the button text based on the theme
    if (document.body.classList.contains('dark')) {
        themeToggle.textContent = 'Light Theme';  // If dark theme is active
    } else {
        themeToggle.textContent = 'Dark Theme';   // If light theme is active
    }
});

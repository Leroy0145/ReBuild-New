// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to toggle visibility of portfolio items
function togglePortfolioItemsVisibility() {
    // Get all portfolio items
    var portfolioItems = document.querySelectorAll('.portfolio-item');

    // Check each portfolio item's visibility and toggle hidden class
    portfolioItems.forEach(function(item) {
        if (!isInViewport(item)) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        }
    });
}

// Initial visibility check
togglePortfolioItemsVisibility();

// Listen for scroll events and check visibility of portfolio items
window.addEventListener('scroll', function() {
    // Throttle the scroll event to improve performance
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(function() {
        togglePortfolioItemsVisibility();
    }, 100); // Adjust the debounce interval as needed
});

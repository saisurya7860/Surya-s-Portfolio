// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navlinks");

hamburger.onclick = function() {
    nav.classList.toggle("active");
}

// Attach click event to each list item
document.querySelectorAll('.navlinks ul li').forEach(item => {
    item.addEventListener('click', function() {
        const anchor = this.querySelector('a');
        if (anchor) {
            anchor.click();  // Simulate anchor click
        }
        // Hide the menu after an item is clicked (on mobile view)
        nav.classList.remove('active');
    });
});
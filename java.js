var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



// Select all the links on the page
const links = document.querySelectorAll('a');

// Add event listeners to each link
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Flash effect when mouse enters
        link.style.backgroundImage = 'linear-gradient(120deg, #ff6b6b, #f5f7fa)';
        link.style.backgroundSize = '200% 100%';
        link.style.backgroundPosition = '100% 0';
        link.style.transition = 'background-position 0.5s ease-in-out';
        link.style.color = '#fff'; // Text color to white for contrast during flash
    });

    link.addEventListener('mouseleave', () => {
        // Remove the flash effect when mouse leaves
        link.style.backgroundImage = 'none';
        link.style.color = '#000'; // Restore original text color
    });
});
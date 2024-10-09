// Select all accordion buttons
var acc = document.getElementsByClassName("accordion");
var i;

// Loop through all accordion buttons
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle between adding and removing the "active" class
    this.classList.toggle("active");

    // Toggle between hiding and showing the parent panel or individual panels
    var nextElement = this.nextElementSibling;
    
    // Check if the next element is a parent panel (with multiple children)
    if (nextElement && nextElement.classList.contains("parent-panel")) {
      // Toggle the parent panel visibility
      if (nextElement.style.display === "block") {
        nextElement.style.display = "none";
      } else {
        nextElement.style.display = "block";
      }
    } else if (nextElement && nextElement.classList.contains("panel")) {
      // Toggle the individual panel visibility
      if (nextElement.style.display === "block") {
        nextElement.style.display = "none";
      } else {
        nextElement.style.display = "block";
      }
    }
  });
}


// Select all the panels on the page
const panels = document.querySelectorAll('.panel');

// Add event listeners to each panel
panels.forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    // Set the background gradient and start animation
    panel.style.backgroundImage = 'linear-gradient(120deg, #410961, #9e001a, #7d077b, #410961)';
    panel.style.backgroundSize = '200% 100%';
    
    // Create a repeating animation that moves the background
    panel.style.animation = 'moveGradient 3s linear infinite'; // Infinite loop of 3 seconds
    panel.style.color = '#fff'; // Change text color inside panel for contrast
    panel.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.5)'; // Apply the shadow
  });

  panel.addEventListener('mouseleave', () => {
    // Stop the gradient animation when mouse leaves
    panel.style.backgroundImage = 'none'; // Remove the background gradient
    panel.style.animation = 'none'; // Stop the animation
    panel.style.color = '#000'; // Reset text color inside panel
    panel.style.boxShadow = 'none'; // Remove the shadow
  });
});

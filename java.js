/* var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
   /* this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel *//*
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
*/
/*
// Select all the panels on the page
const panels = document.querySelectorAll('.panel');

//Add event listeners to each panel
panels.forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    // Flash effect when mouse enters the panel
    panel.style.backgroundImage = 'linear-gradient(120deg, #410961, #545057, #7d077b)';
    panel.style.backgroundSize = '200% 100%';
    panel.style.backgroundPosition = '100% 0';
    panel.style.transition = 'background-position 0.5s ease-in-out';
    panel.style.color = '#fff'; // Change text color inside panel for contrast
  });

  panel.addEventListener('mouseleave', () => {
    // Remove the flash effect when mouse leaves
    panel.style.backgroundImage = 'none';
    panel.style.backgroundSize = '200% 100%';
    panel.style.backgroundPosition = '0% 0'; // Reset to starting position
    panel.style.transition = 'none'; // Reset transition so it works on next hover
    panel.style.color = '#000'; // Reset text color inside panel
  });

});
*/


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
  });

  panel.addEventListener('mouseleave', () => {
    // Stop the gradient animation when mouse leaves
    panel.style.backgroundImage = 'none'; // Remove the background gradient
    panel.style.animation = 'none'; // Stop the animation
    panel.style.color = '#000'; // Reset text color inside panel
  });
});

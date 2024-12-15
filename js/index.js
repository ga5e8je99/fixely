 // Function to handle fade-in effect
 const fadeInSections = document.querySelectorAll(".fade-in-section");
  
 const handleScroll = () => {
   fadeInSections.forEach(section => {
     const sectionTop = section.getBoundingClientRect().top;
     const triggerBottom = window.innerHeight * 0.8; // Trigger point

     if (sectionTop < triggerBottom) {
       section.classList.add("visible"); // Add the visible class
     }
   });
 };

 // Listen for scroll events
 window.addEventListener("scroll", handleScroll);

 // Trigger on page load
 handleScroll();
 const counters = document.querySelectorAll('.counter');

const startCounter = () => {
 counters.forEach(counter => {
   const updateCount = () => {
     const target = parseFloat(counter.getAttribute('data-target')); // Get target value
     const count = parseFloat(counter.innerText); // Current value
     const increment = target / 100; // Define increment step

     if (count < target) {
       if (target === 8.1) {
         // Specific logic for ratings with decimal
         counter.innerText = (count + increment).toFixed(1);
       } else {
         counter.innerText = Math.ceil(count + increment);
       }
       setTimeout(updateCount, 20); // Adjust speed of the counter
     } else {
       counter.innerText = target; // Ensure final value matches the target
     }
   };
   updateCount();
 });
};

// Trigger the animation on scroll
const statsSection = document.querySelector('.stats-section');

const handleScroll2 = () => {
 const sectionTop = statsSection.getBoundingClientRect().top;
 const triggerBottom = window.innerHeight * 0.8;

 if (sectionTop < triggerBottom) {
   startCounter();
   window.removeEventListener('scroll', handleScroll2); // Trigger only once
 }
};

window.addEventListener('scroll', handleScroll2);
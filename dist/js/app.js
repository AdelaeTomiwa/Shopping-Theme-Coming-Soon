const countdown = document.querySelector('.countdown');
const launchDate = new Date('Dec 1, 2022, 12:00:00').getTime();

const interval = setInterval(() => {
   // Get today date and Time
   const currentDay = new Date().getTime();

   // Distance from Now and the Launch Date
   const distance = launchDate - currentDay;

   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   countdown.innerHTML = `
      <div>${days}<span>Days</span></div>
      <div>${hours}<span>Hours</span></div>
      <div>${mins}<span>Mins</span></div>
      <div>${seconds}<span>Seconds</span></div>
   `;

   // If Launch Date Passed
   if (distance < 0) {
      // Stop the Coundown
      clearInterval(interval);
      // Style and Output Text
      countdown.style.color = '#17a2b8';
      countdown.innerHTML = 'Launched';
   }
}, 1000);

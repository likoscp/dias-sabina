const currentTime = document.getElementById("currentTime");
const now = new Date();

const options = { day: '2-digit', month: 'long', year: 'numeric' };
const datePart = now.toLocaleDateString('en-EN', options);

const hours = String(now.getHours()).padStart(2, '0'); 
const minutes = String(now.getMinutes()).padStart(2, '0'); 

const fullDateTime = `${datePart} ${hours}:${minutes}`;

currentTime.textContent = fullDateTime;

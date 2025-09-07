function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleNightMode() {
  document.body.classList.toggle('night-mode');
}

  let clickCount = sessionStorage.getItem('clickCount') ? parseInt(sessionStorage.getItem('clickCount')) : 0;

  function handleClick() {
    clickCount++;
    sessionStorage.setItem('clickCount', clickCount); // Save the updated click count

    if (clickCount < 3) {
      document.getElementById('click').textContent = clickCount;
    } else {
      window.location.href = './assets/Sachinalbert.pdf';
    }
  }

  function resetClickCount() {
    clickCount = 0;
    sessionStorage.setItem('clickCount', clickCount); // Reset the click count in sessionStorage
    alert('Resetted||Found an EasterEgg|| Click Contact info by 3');
  }

  function han(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = '#contact'; // Navigate to the contact section
}

function randomChange() {
  const randomChange = Math.floor(Math.random() * 10000000000); // Random change between 0 and 999
  const newNumber = randomChange;
const numberString = newNumber.toString();
const letterMapping = {
  '0': 'S',
  '1': 'A',
  '2': 'C',
  '3': 'H',
  '4': 'I',
  '5': 'N',
  '6': 'L',
  '7': 'B',
  '8': 'E',
  '9': 'R'
};

let letterString = '';
for (let char of numberString) {
  letterString += letterMapping[char];
}
document.getElementById('number').innerText = letterString;
}

// Automatically call the function when the page loads
window.onload = randomChange;
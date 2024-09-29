const container = document.getElementById('container');
const confirmationMessage = document.getElementById('confirmationMessage');

container.addEventListener('submit', (event) => {
    event.preventDefault();

    // Perform form validation here

    // Simulate form submission (replace with actual submission logic)
    confirmationMessage.style.display = 'block';
    container.style.display = 'none';
});

const slider = document.querySelector('.slider-content');

function startScroll() {
    slide.style.animationPlayState = 'running';
}

function stopScroll() {
    slide.style.animationPlayState = 'paused';
}

function startScroll() {
    document.querySelector('.slider-track').style.animationPlayState = 'running';
  }
  
  function stopScroll() {
    document.querySelector('.slider-track').style.animationPlayState = 'paused';
  }


  
document.getElementById('payment-method').addEventListener('change', function () {
    var easypaisaDetails = document.getElementById('easypaisa-details');
    var jazzcashDetails = document.getElementById('jazzcash-details');
    var bankDetails = document.getElementById('bank-details');

    // Hide all details initially
    easypaisaDetails.style.display = 'none';
    jazzcashDetails.style.display = 'none';
    bankDetails.style.display = 'none';

    // Show the selected payment method details
    if (this.value === 'easypaisa') {
        easypaisaDetails.style.display = 'block';
    } else if (this.value === 'jazzcash') {
        jazzcashDetails.style.display = 'block';
    } else if (this.value === 'bank') {
        bankDetails.style.display = 'block';
    }
});const hamasTrack = document.getElementById('hamasTrack');
let currentIndex = 0;

function slide() {
    currentIndex++;
    if (currentIndex >= hamasTrack.children.length) {
        currentIndex = 0;
    }
    const itemWidth = hamasTrack.children[currentIndex].clientWidth;
    hamasTrack.style.transform = `translateX(-${currentIndex * (itemWidth + 20)}px)`; // Adjusted for margin
}

setInterval(slide, 2000); // Slides every 2 seconds


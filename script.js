
let isFlipping = false;

function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12) {
        return "Good Morning";
    } else if (hours < 15) {
        return "Good Afternoon";
    } else if (hours < 22) {
        return "Good Evening";
    }
    else {
        return "Good Night";
    }
}

function updateFlipClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const isPM = hours >= 12;
    const ampm = isPM ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = String(hours).padStart(2, '0');


    const greetingMessage = getGreeting();
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    document.getElementById('greeting').innerText = `Hello Vivek✌️, ${greetingMessage} 😇`;
    document.getElementById('date').innerText = formattedDate;


    document.getElementById('hour-front').innerText = formattedHours;
    document.getElementById('minute-front').innerText = minutes;
    document.getElementById('ampm-front').innerText = ampm;


    flip('second', seconds);
}

function flip(type, value) {
    const front = document.getElementById(`${type}-front`);
    const back = document.getElementById(`${type}-back`);

    if (!front || !back) {
        console.error(`Element with ID ${type}-front or ${type}-back does not exist.`);
        return;
    }

    if (front.innerText !== value && !isFlipping) {
        isFlipping = true;
        back.innerText = value;

        const flipCardInner = front.parentElement;
        flipCardInner.style.transform = 'rotateX(180deg)';

        setTimeout(() => {
            front.innerText = value;
            flipCardInner.style.transform = 'rotateX(0deg)';
            isFlipping = false;
        }, 800);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    updateFlipClock(); // Call to set the current time immediately
    setInterval(updateFlipClock, 1000); // Update every second
});


// Search bar

const searchInput = document.getElementById('search-input')



const clearbtn = document.getElementById('hide-btn')

// change display property
searchInput.addEventListener('input', function () {
    
    if (searchInput.value.trim() !== '') {
        clearbtn.style.display = 'block';
    } else {
        clearbtn.style.display = 'none';
    }
});

// clear input 
clearbtn.addEventListener('click', function () {
    searchInput.value = '';
    clearbtn.style.display = 'none';
    searchInput.focus();
});

//hide everthing when i switch in mobile phone on searching time 


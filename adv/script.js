// Draggable Pawns Code
const pawns = document.querySelectorAll('.pawn');

pawns.forEach(pawn => {
    let isDragging = false;
    let offsetX, offsetY;

    // Function to handle the start of a drag (both mouse and touch)
    const startDrag = (e) => {
        isDragging = true;

        // Prevents default touch actions like scrolling while dragging
        e.preventDefault();

        // Calculate the initial offset
        if (e.type === 'touchstart') {
            // Touch event
            const touch = e.touches[0];
            offsetX = touch.clientX - pawn.getBoundingClientRect().left;
            offsetY = touch.clientY - pawn.getBoundingClientRect().top;
        } else {
            // Mouse event
            offsetX = e.clientX - pawn.getBoundingClientRect().left;
            offsetY = e.clientY - pawn.getBoundingClientRect().top;
        }

        // Set the pawn's position to absolute for free movement
        pawn.style.position = 'absolute';
        pawn.style.zIndex = 1000; // Ensure it's on top while dragging
    };

    // Function to handle the dragging (both mouse and touch)
    const drag = (e) => {
        if (isDragging) {
            let clientX, clientY;

            if (e.type === 'touchmove') {
                const touch = e.touches[0];
                clientX = touch.clientX;
                clientY = touch.clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }

            // Update pawn position during drag
            pawn.style.left = `${clientX - offsetX}px`;
            pawn.style.top = `${clientY - offsetY}px`;
        }
    };

    // Function to handle the end of a drag (both mouse and touch)
    const endDrag = () => {
        if (isDragging) {
            isDragging = false;  // Stop dragging
        }
    };

    // Event listeners for mouse support
    pawn.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);

    // Event listeners for touch support
    pawn.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', endDrag);
});

// Modal and Random Card Selection Code

// Get references to the buttons and modal elements
const nutriBtn = document.getElementById('nutriBtn');
const promiseBtn = document.getElementById('promiseBtn');
const modal = document.getElementById('cardModal');
const modalImage = document.getElementById('cardImage');
const closeModal = document.querySelector('.close');

// Random function to select a card from the Nutri-Cards folder
function getRandomNutriCard() {
    const randomNum = Math.floor(Math.random() * 127) + 1; // Get a random number between 1 and 76
    return `nutri-cards/${randomNum}.png`; // Construct the image path
}

// Random function to select a card from the Promise-Cards folder
function getRandomPromiseCard() {
    const randomNum = Math.floor(Math.random() * 64) + 1; // Get a random number between 1 and 64
    return `promise-cards/${randomNum}.png`; // Construct the image path
}

// Function to open the modal with the chosen image
function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.style.display = 'block'; // Show the modal
}

// Event listener for Nutri-Cards button
nutriBtn.addEventListener('click', () => {
    const randomNutriCard = getRandomNutriCard();
    openModal(randomNutriCard); // Open modal with random Nutri card
});

// Event listener for Promise-Cards button
promiseBtn.addEventListener('click', () => {
    const randomPromiseCard = getRandomPromiseCard();
    openModal(randomPromiseCard); // Open modal with random Promise card
});

// Event listener to close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'; // Hide the modal
    }
});

// Dice Rolling Functionality

// Get the button and result div elements
const rollDiceBtn = document.getElementById('rollDiceBtn');
const diceResult = document.getElementById('diceResult');

// Function to roll the dice
function rollDice() {
    // Generate a random number between 1 and 6
    const diceValue = Math.floor(Math.random() * 6) + 1;
    
    // Display the dice value in the result div
    diceResult.textContent = `You rolled a ${diceValue}`;
}

// Add an event listener to the button
rollDiceBtn.addEventListener('click', rollDice);

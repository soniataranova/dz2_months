document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');

    let count = 0;

    function updateCounter() {
        counterElement.textContent = count;
        if (count > 0) {
            counterElement.className = 'counter green';
        } else if (count < 0) {
            counterElement.className = 'counter red';
        } else {
            counterElement.className = 'counter gray';
        }
    }

    increaseButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decreaseButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        updateCounter();
    });

    // Initial update
    updateCounter();
});

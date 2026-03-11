document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enter-game-btn');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const startGameBtn = document.getElementById('start-game-btn');
    
    const startScreen = document.getElementById('start-screen');
    const confirmScreen = document.getElementById('confirm-screen');
    const playScreen = document.getElementById('play-screen');
    const gameBox = document.querySelector('.game-content');

    // Step 1: Enter Game -> Background: first-angle.jpg
    enterBtn.addEventListener('click', () => {
        document.body.classList.add('game-started');
        startScreen.style.display = 'none';
        confirmScreen.style.display = 'block';
    });

    // Step 2: Click Checkmark -> Shows the "Now find the code" button
    yesBtn.addEventListener('click', () => {
        confirmScreen.style.display = 'none';
        playScreen.style.display = 'block';
    });

    // Step 3: Click Cross -> Reset
    noBtn.addEventListener('click', () => {
        document.body.classList.remove('game-started');
        confirmScreen.style.display = 'none';
        startScreen.style.display = 'block';
    });

    // Step 4: Now find the code -> Change background & Hide text
    startGameBtn.addEventListener('click', () => {
        // Remove the second background class
        document.body.classList.remove('game-started');
        // Add the third background class
        document.body.classList.add('searching');
        
        // Hide the entire gray box
        gameBox.style.display = 'none';
        
        console.log("Final background loaded. Box hidden.");
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // ... keep your existing button variables here ...
    const startGameBtn = document.getElementById('start-game-btn');
    const gameBox = document.querySelector('.game-content');

    let currentAngle = 0; // 0 = Front, 1 = Right, 2 = Back, 3 = Left
    let controlsActive = false; // Only allow movement AFTER the game starts

    // ... keep your Step 1, 2, and 3 logic here ...

    // Step 4: Now find the code
    startGameBtn.addEventListener('click', () => {
        document.body.classList.remove('game-started');
        
        // Hide UI
        gameBox.style.display = 'none';
        
        // Enable Keyboard Controls
        controlsActive = true;
        updateBackground(); 
        console.log("Controls activated. Use Arrow Keys to turn.");
    });

    // Keyboard Listener
    document.addEventListener('keydown', (event) => {
        if (!controlsActive) return; // Don't move if we haven't started

        if (event.key === 'ArrowRight') {
            currentAngle = (currentAngle + 1) % 4;
            updateBackground();
        } 
        else if (event.key === 'ArrowLeft') {
            currentAngle = (currentAngle - 1 + 4) % 4;
            updateBackground();
        }
    });

    function updateBackground() {
        // Remove all possible angle classes first
        document.body.classList.remove('angle-0', 'angle-1', 'angle-2', 'angle-3');
        
        // Add the current angle class
        document.body.classList.add(`angle-${currentAngle}`);
        console.log("Current Angle:", currentAngle);
    }
});
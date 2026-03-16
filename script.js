document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const gameBox = document.querySelector('.game-content');
    const startScreen = document.getElementById('start-screen');
    const confirmScreen = document.getElementById('confirm-screen');
    const playScreen = document.getElementById('play-screen');
    const readyCodeBtn = document.getElementById('ready-code-btn');
    const decisionModal = document.getElementById('decision-modal');
    const codeModal = document.getElementById('code-modal');
    const codeInput = document.getElementById('code-input');
    const victoryScreen = document.getElementById('victory-screen');

    // Buttons
    const enterBtn = document.getElementById('enter-game-btn');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const startGameBtn = document.getElementById('start-game-btn');
    const codeYesBtn = document.getElementById('code-yes-btn');
    const codeNoBtn = document.getElementById('code-no-btn');
    const submitBtn = document.getElementById('submit-code');
    const closeBtn = document.getElementById('close-modal');

    let currentAngle = 0; 
    let controlsActive = false;

    // --- MENU FLOW ---
    enterBtn.onclick = () => {
        document.body.classList.add('game-started');
        startScreen.style.display = 'none';
        confirmScreen.style.display = 'block';
    };

    yesBtn.onclick = () => {
        confirmScreen.style.display = 'none';
        playScreen.style.display = 'block';
    };

    noBtn.onclick = () => {
        document.body.classList.remove('game-started');
        confirmScreen.style.display = 'none';
        startScreen.style.display = 'block';
    };

    startGameBtn.onclick = () => {
        document.body.classList.remove('game-started');
        gameBox.style.display = 'none';
        controlsActive = true;
        readyCodeBtn.style.display = 'block';
        updateBackground();
    };

    // --- CODE MODAL FLOW ---
    readyCodeBtn.onclick = () => {
        decisionModal.style.display = 'flex';
        controlsActive = false;
    };

    codeNoBtn.onclick = () => {
        decisionModal.style.display = 'none';
        controlsActive = true;
    };

    codeYesBtn.onclick = () => {
        decisionModal.style.display = 'none';
        codeModal.style.display = 'flex';
        codeInput.focus();
    };

    closeBtn.onclick = () => {
        codeModal.style.display = 'none';
        controlsActive = true;
        codeInput.value = '';
    };

    // --- THE WIN LOGIC ---
    submitBtn.onclick = () => {
        const val = codeInput.value.trim().toLowerCase();
        if (val === 'rat') {
            // Hide Gameplay UI
            codeModal.style.display = 'none';
            readyCodeBtn.style.display = 'none';
            controlsActive = false;

            // Change Background
            document.body.classList.remove('angle-0', 'angle-1', 'angle-2', 'angle-3', 'angle-4', 'angle-5');
            document.body.classList.add('victory');

            // Show Victory Message
            victoryScreen.style.display = 'flex';
        } else {
            const feedback = document.getElementById('code-feedback');
            feedback.style.display = 'block';
            codeInput.value = '';
            setTimeout(() => { feedback.style.display = 'none'; }, 2000);
        }
    };

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!controlsActive) return;
        if (e.key === 'ArrowRight') {
            currentAngle = (currentAngle + 1) % 6;
            updateBackground();
        } else if (e.key === 'ArrowLeft') {
            currentAngle = (currentAngle - 1 + 6) % 6;
            updateBackground();
        }
    });

    function updateBackground() {
        document.body.classList.remove('angle-0', 'angle-1', 'angle-2', 'angle-3', 'angle-4', 'angle-5');
        document.body.classList.add(`angle-${currentAngle}`);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enter-game-btn');
    const okBtn = document.getElementById('ok-btn');
    const output = document.getElementById('output');

    enterBtn.addEventListener('click', () => {
        // Switch background to first-angle.jpg
        document.body.classList.add('game-started');
        
        // Hide start screen
        document.getElementById('welcome-text').style.display = 'none';
        document.getElementById('timer-box').style.display = 'none';
        document.getElementById('story-title').style.display = 'none';
        document.getElementById('story-text').style.display = 'none';
        document.getElementById('Escape-Room').style.display = 'none';
        enterBtn.style.display = 'none';

        // Show OK
        output.textContent = "The game has begun...";
        okBtn.style.display = 'block';
    });

    okBtn.addEventListener('click', () => {
        // Hide OK button
        okBtn.style.display = 'none';
        
        // Show "Now find the code" and keep the background!
        output.innerHTML = `
            <button class="arrow-button" id="start-search">Now find the code</button>
        `;
    });
});
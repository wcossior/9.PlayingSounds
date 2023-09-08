const soundBoxes = document.querySelectorAll('.btn');

soundBoxes.forEach(soundBox => {
    let soundType = soundBox.textContent.toLocaleLowerCase();
    soundBox.addEventListener('click', () => {
        let audio = document.querySelector(`#${soundType}`);
        audio.play();
    });
});
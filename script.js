const soundBoxes = document.querySelectorAll('.btn');

soundBoxes.forEach(soundBox => {
    let soundType = soundBox.textContent.toLocaleLowerCase();
    soundBox.addEventListener('click', () => {
        stoppingTheRestOfTheAudios();
        let sound = document.querySelector(`#${soundType}`);
        sound.play();
    });
});

function stoppingTheRestOfTheAudios() {
    let allTheSounds = document.querySelectorAll('audio');
    allTheSounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}
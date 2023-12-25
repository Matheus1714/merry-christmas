document.addEventListener('DOMContentLoaded', function () {
    let modal = document.getElementById('message')
    let audio = document.getElementById('audio')
    let playButton = document.getElementById('playButton')
    let doNothing = document.getElementById('doNothing')

    modal.style.display = 'block'

    playButton.addEventListener('click', () => {
      modal.style.display = 'none';
      audio.play();
    })

    doNothing.addEventListener('click', () => {
        modal.style.display = 'none';
    })
})
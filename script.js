document.addEventListener('DOMContentLoaded', function () {
    const soundButton = document.getElementById('sound-btn');

    if (soundButton) {
        soundButton.addEventListener('click', function () {
            console.log("Button clicked");
            const audio = document.getElementById('bg-music');
            const volumeIcon = soundButton.querySelector('i');

            if (audio.paused) {
                audio.play();
                volumeIcon.classList.remove('fa-volume-mute');
                volumeIcon.classList.add('fa-volume-up');
            } else {
                audio.pause();
                volumeIcon.classList.remove('fa-volume-up');
                volumeIcon.classList.add('fa-volume-mute');
            }
        });
    } else {
        console.error("Button not found");
    }
});


if (window.location.pathname.includes("letter.html")) {
    // Get the audio element
    const audio = document.getElementById('bg-music');

    // Set the volume to a lower value (e.g., 0.2 for quieter sound)
    audio.volume = 0.2; // You can adjust this value (0.0 to 1.0) for quieter/louder sound
}

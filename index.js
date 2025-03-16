window.addEventListener("keydown", function (e) {
    // Select the key and corresponding audio elements
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Log for debugging
    



    


    // If no matching audio or key is found, exit the function
    if (!audio) return;

    // Reset the audio to allow fast replays
    audio.currentTime = 0;
    audio.play();

    // Add the 'playing' class to the key
    key.classList.add("playing");

    // Remove the 'playing' class after 500ms
    setTimeout(() => {
        key.classList.remove("playing");
    }, 500);
});

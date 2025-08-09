const pianoKeys = document.querySelectorAll(".piano-keys .key"); // Select all piano keys

const volumeSlider = document.querySelector(".volume-slider input"); // Select the volume slider

const keysCheck = document.querySelector(".keys-check input"); // Select the keys check input

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav"); // Create a new audio object

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  console.log(mapedKeys);
  const clickedKey = document.querySelector(`[data-key="${key}"]`); // Select the clicked key element]`);
  clickedKey.classList.add("active"); // Add 'active' class to the clicked key
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150); // Remove 'active' class after 150ms
};

pianoKeys.forEach((key) => {
  console.log(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key)); // Add click event listener to each key
  mapedKeys.push(key.dataset.key); // Map the key to its data-key attribute
}); // Play the tune corresponding to the clicked key

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume); /* Handle volume change */

keysCheck.addEventListener(
  "click",
  showHideKeys
); /* Show or hide keys based on checkbox state */

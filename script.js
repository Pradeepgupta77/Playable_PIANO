

const pianoKeys = document.querySelectorAll(".pino-key .key");
const volumeSlider = document.querySelector(".volume-slider input");
// const keyCheckbox = document.querySelector(".key-chekbox input");

let allkeys = [];
const audio = new Audio("a.wav");

const playTune = (key) => {
  audio.src = `${key}.wav`;
  audio.load();

  const clickedkey = document.querySelector(`[data-key="${key}"]`);
  clickedkey.classList.add("active");

  setTimeout(() => {
    clickedkey.classList.remove("active");
  }, 150);

  audio.addEventListener("canplaythrough", () => {
    audio.play();
  }, { once: true });
};

pianoKeys.forEach(key => {
  allkeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

// const showHideKeys = ()=>{
//     pianoKeys.forEach(key => key.classList.toggle("hide"));
// }

const pressedkey = (e) => {
  if (allkeys.includes(e.key)) {
    playTune(e.key);
  }
};

// keyCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey);

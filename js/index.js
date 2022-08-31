import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonMore,
    buttonLess,
    soundFlorest,
    soundRain,
    soundCoffee,
    soundFire,
    sunIcon,
    moonIcon
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonMore,
  buttonLess
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})
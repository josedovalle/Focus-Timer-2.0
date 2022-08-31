export default function () {
    
    const florestAudio = new Audio("./audio/florest.wav")
    const rainAudio = new Audio('./audio/rain.wav')
    const coffeeAudio = new Audio('./audio/people.wav')
    const fireAudio = new Audio('./audio/fire.wav')

    bgAudio.loop = true

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    return {
        pressButton,
        timeEnd,
        bgAudio
    }
}
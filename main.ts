input.onButtonPressed(Button.A, function () {
    if (steps < 10) {
        basic.showNumber(steps)
    }
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
steps = 0
basic.forever(function () {
    basic.showNumber(steps)
})

input.onButtonPressed(Button.A, function () {
    if (steps < 10) {
        basic.showNumber(steps)
    }
})
function create_encoded_url (num: number) {
    return "" + timeanddate.dateTime() + "|" + num
}
input.onButtonPressed(Button.AB, function () {
    steps = 0
})
input.onButtonPressed(Button.B, function () {
    bluetooth.advertiseUrl(
    create_encoded_url(steps),
    7,
    false
    )
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
steps = 0

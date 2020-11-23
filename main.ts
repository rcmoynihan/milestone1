input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(2000)
    basic.clearScreen()
})
function create_encoded_url (num: number) {
    url = "https://13" + ("" + steps)
    return url
}
input.onButtonPressed(Button.AB, function () {
    steps = 0
})
input.onButtonPressed(Button.B, function () {
    create_encoded_url(steps)
    bluetooth.advertiseUrl(
    url,
    7,
    false
    )
    basic.pause(2000)
    bluetooth.stopAdvertising()
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    basic.pause(100)
    basic.clearScreen()
})
let url = ""
let steps = 0
steps = 0
control.inBackground(function () {
    while (true) {
        steps = 0
        basic.pause(86400000)
    }
})

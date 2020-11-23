input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(2000)
    basic.clearScreen()
})
function create_encoded_url (num: number) {
    url = "https://13" + steps
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
    basic.pause(100)
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
timeanddate.setTime(12, 0, 0, timeanddate.MornNight.AM)
steps = 0
while (true) {
    if (timeanddate.time(timeanddate.TimeFormat.HHMM24hr) == "00:00") {
        steps = 0
    }
}

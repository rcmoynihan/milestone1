input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(steps)
    basic.pause(1000)
    basic.clearScreen()
})
function create_encoded_url(num: number): string {
    return "hey work dammit"
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    steps = 0
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    bluetooth.advertiseUrl(create_encoded_url(steps), 7, false)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    steps += 1
})
let steps = 0
steps = 0

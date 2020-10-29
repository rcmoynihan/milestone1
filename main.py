def on_button_pressed_a():
    basic.show_number(steps)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def create_encoded_url(num: number):
    return "hey work dammit"

def on_button_pressed_ab():
    global steps
    steps = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    bluetooth.advertise_url(create_encoded_url(steps), 7, False)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global steps
    steps += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

steps = 0
steps = 0
def on_button_pressed_a():
    basic.show_number(steps)
    basic.pause(2000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def create_encoded_url(num: number):
    global url
    url = "https://13" + ("" + str(steps))
    return url

def on_button_pressed_ab():
    global steps
    steps = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    create_encoded_url(steps)
    bluetooth.advertise_url(url, 7, False)
    basic.pause(2000)
    bluetooth.stop_advertising()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global steps
    steps += 1
    basic.show_number(steps)
    basic.pause(100)
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

url = ""
steps = 0
steps = 0

def on_in_background():
    global steps
    while True:
        steps = 0
        basic.pause(86400000)
control.in_background(on_in_background)

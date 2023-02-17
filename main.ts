input.onButtonPressed(Button.A, function () {
    radio.sendString("hi")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(76)
})
radio.setGroup(107)

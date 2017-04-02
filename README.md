# hackGSU-2017
hackGSU 2017 project for the Antem Security Challenge: https://hackgsu-spring-2017.devpost.com/

This project is hosted at *[nishnha.github.io/hackGSU-2017](https://nishnha.github.io/hackGSU-2017/)*

Our aim is to provide a method for guests of large corporate buildings, where confidentiality is a factor, to check-in and reach their destination securely and without much hassle. Our broad idea is that guests recieve a wristband that emits two signals: an infrared LED that blinks out an identifier code in binary specific to a guest, and a bluetooth backup signal for corrections and warnings should something go wrong.

The process of events starts with a guest flashing their ID to receive a wristband. The guest taps the wristband to mark the start of their venture through the halls towards their given destination. The IR blinker sends out an ID that either cameras or IR sensors will pick up, proving that the guest is in a room/hallway on the way to their destination. When the guest reaches their destination, they tap their wristbands again to show that they've arrived. The process on the way out works much in the same way. Should the guest deviate from the path, possibly enetering rooms where confidential information is being displayed, or should the IR code be hidden for a significant length of time, the bluetooth transmitter will send a signal allerting security of the presumed hostile guest's last known location.

For a proof of concept, we are using a raspberry pi 3 scripted with python to blink out any given identifier from 0 to 255 in binary. The same device is being equipped with a bluetooth transmitter. We're using another raspberry pi as a bluetooth reciever to record information. Unity 3D is being used to map out guest's location relative to the cameras that are picking them up. OpenCV is being used to process webcam footage to find the "IR Identifier." Lastly AWS is being used to store data and talk between machines.

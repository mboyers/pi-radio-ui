ssh pi@192.168.1.125 "rm -rf /home/pi/pi-radio/frontend/*"
scp -r build/* pi@192.168.1.125:/home/pi/pi-radio/frontend/
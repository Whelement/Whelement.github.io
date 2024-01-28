all: server

server:
	echo "THIS IS FOR DEBUG PURPOSES ONLY AND IS NOT PROD READY!!"
	python3 -m http.server

serverp80:
	echo "THIS IS FOR DEBUG PURPOSES ONLY AND IS NOT PROD READY!!"
	echo "Ports below 1024 need root access. Please enter your account password to continue."
	sudo python3 -m http.server 80
all: server

server:
	echo "THIS IS FOR DEBUG PURPOSES ONLY AND IS NOT PROD READY!!"
	python3 -m http.server

serverp80:
	echo "THIS IS FOR DEBUG PURPOSES ONLY AND IS NOT PROD READY!!"
	sudo python3 -m http.server 80
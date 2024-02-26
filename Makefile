all: build test

test:
	npm start

build:
	npm run build

prod:
	echo "You must have `serve` installed via npm"
	serve -g build

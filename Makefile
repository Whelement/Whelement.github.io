all: build prod

test:
	pnpm run start

build:
	pnpm run build

prod:
	echo "You must have `serve` installed via pnpm i serve"
	pkill -9 serve
	serve -g dist

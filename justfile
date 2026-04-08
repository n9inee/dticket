default: build-prod

build:
	node "./build.mjs"

build-prod:
	node "./build.mjs" -- --prod

watch:
	node "./build.mjs" -- --watch

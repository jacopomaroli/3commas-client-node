.PHONY: test

test:
	npm run test

test-unit:
	npm run test-unit

test-integration:
	npm run test-integration

client:
	npx openapi --input ./3commas_openapidoc.yml --output ./src/client --client node --name Client

build:
	npm run build

clean:
	npm run clean

watch:
	npm run watch

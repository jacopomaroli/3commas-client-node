.PHONY: test

test:
	npm run test

test-unit:
	npm run test-unit

test-integration:
	npm run test-integration

client:
	npx openapi --input ./3commas_openapidoc.yml --output ./src/client --client node --name Client

ws-client:
	# npx ag ./3commas_asyncapidoc_src.yml @asyncapi/ts-nats-template -o ./src/wsclient -p server=threeCommas --force-write
	npx ts-node ./tools/asyncapi_gen.ts

build:
	npm run build

clean:
	npm run clean

watch:
	npm run watch

install:
	npm i -g parcel-bundler
.PHONY: install

build:
.PHONY: build

run: clean
	parcel serve src/index.html
.PHONY: run

clean:
	rm -rf .cache/
	rm -rf dist/
.PHONY: clean
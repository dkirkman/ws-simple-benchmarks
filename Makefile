
.PHONY: make configure copyjs

all: make build/libdkbench.js build/libdkbench.js copyjs

build/libdkbench.js: build/src/libdkbench.a
	emcc -s WASM=1 -s MODULARIZE=1 build/src/libdkbench.a -o build/libdkbench.js

build/libdkbench.js: build/src/libdkbench.a
	emcc -s WASM=0 -s MODULARIZE=1 build/src/libdkbench.a -o build/libdkbench.js

copyjs:
	rsync -r --include '*.js'  --include '*/' --exclude '*' src/ build
	rsync -r --include '*.mjs' --include '*/' --exclude '*' src/ build
	rsync -r --include '*.jsx' --include '*/' --exclude '*' src/ build

make: build
	cd build; emmake make

build:
	mkdir build
	cd build; emconfigure cmake -DCMAKE_BUILD_TYPE=Release ../

configure: build
	cd build; emconfigure cmake -DCMAKE_BUILD_TYPE=Release ../


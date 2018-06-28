
.PHONY: make configure copyjs

all: make build/libdkbench.js build/libdkbenchAsm.js copyjs

build/libdkbench.js: build/src/libdkbench.a
	emcc -s WASM=1 -s MODULARIZE=1 build/src/libdkbench.a -o build/libdkbench.js

build/libdkbenchAsm.js: build/src/libdkbench.a
	emcc -s WASM=0 -s MODULARIZE=1 build/src/libdkbench.a -o build/libdkbenchAsm.js

copyjs:
	rsync -r --include '*.js'  --include '*/' --exclude '*' src/ build
	rsync -r --include '*.mjs' --include '*/' --exclude '*' src/ build
	rsync -r --include '*.jsx' --include '*/' --exclude '*' src/ build

make: build
	cd build; emmake make VERBOSE=1

build:
	mkdir build
	cd build; emconfigure cmake -DCMAKE_C_FLAGS="-O3" ../

configure: build
	cd build; emconfigure cmake -DCMAKE_C_FLAGS="-O3" ../


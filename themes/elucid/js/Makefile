# This makefile uses Babel to translate the
# EcmaScript 5 source files into browser compatible
# JavaScript.

all: elucid.js components

elucid.js: elucid.babel
	babel elucid.babel -o elucid.js

components:
	$(MAKE) -C components

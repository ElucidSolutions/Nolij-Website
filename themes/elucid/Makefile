# This makefile compiles the sass and JavaScript
# (Babel) files used by the Elucid theme.

all: css js

css: sass/style.scss
	sass sass/style.scss > css/style.css

js:
	$(MAKE) -C js

node_modules:
	npm install -g --save-dev babel-cli
	npm install --save-dev babel-preset-env npm install --save-dev babel-preset-react

# Represents the Babelrc file.
define BABELRC
{
  "presets": ["env", "react"]
}
endef
export BABELRC
babelrc:
	echo "$$BABELRC" >> .babelrc

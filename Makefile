install: 
	npm ci;
	npm install readline-sync;
	chmod +x bin/brain-games.js
brain-games:
	node bin/brain-games.js
 lint: 
	npx eslint .
publish: 
	 npm publish --dry-run
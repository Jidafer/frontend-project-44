install: 
	npm ci;
	npm install readline-sync;
	chmod +x bin/brain-games.js
brain-games:
	node bin/brain-games.js
lint:
	npx eslint 
publish: 
	 npm publish --dry-run
brain-even: 
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime :
	node bin/brain-prime.js
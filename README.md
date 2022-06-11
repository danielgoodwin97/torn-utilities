# Torn Utilities
This is a repository of assorted reusable scripts which should eventually make my life easier the more I write scripts.

You're more than welcome to use any scripts here if they help you too.

# Usage
For use in user scripts, you need to use jsdelivr to create a link.

For example: `https://cdn.jsdelivr.net/gh/danielgoodwin97/torn-script-utilities/dist/js/script_name.js`.

Then require that URL in your script like this:

```
// ==UserScript==
// @name         A script
// @namespace    https://fatu.uk/
// @version      1
// @description  The absolute best script you've ever seen
// @author       FATU
// @include      *torn.com*
// @require      https://cdn.jsdelivr.net/gh/danielgoodwin97/torn-script-utilities/dist/js/script_name.js
// @grant        none
// ==/UserScript==
```

You can find a full list of scripts [here](https://github.com/danielgoodwin97/torn-script-utilities/tree/main/dist/js).

# Documentation
There is documentation per script in the source file directory's read me. You can view that [here](https://github.com/danielgoodwin97/torn-script-utilities/tree/main/src/).

# Development

All source files are located in `src` and compile into `dist`.

Compilation of files is handled by gulp. To compile files you need to have `gulp-cli` installed globally. To do this you can run the command `npm i -g gulp-cli`.

To compile files, all you need to do is run `gulp build` in terminal from the root of the project.

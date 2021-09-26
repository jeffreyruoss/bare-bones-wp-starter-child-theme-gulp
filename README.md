# Bare-bones WordPress child theme starter with Gulp 09-26-2021

## Features
- Auto-include any PHP file includes/ in this child theme directory
- Auto-reloads any PHP file that changes in this child theme directory
- SASS compiling and CSS injection for any .scss file in assets/sass/ in this child theme directory
- Babel transpiling on any file in assets/js/scripts/ in this child theme directory
- Concatenation
- Minification
- Sourcemaps

## Setup steps
- Place this directory in /wp-content/themes

- Run this in this directory:<br>
`npm install`

- Replace all instances of "mysite" with your site name, author name, urls, parent theme, etc 

## Run
`npm run start` or `gulp`

## Notes
- This was set up on node/16.6.2
- Doesn't include a webserver (put your local URL in the proxy settings in gulpfile.js)


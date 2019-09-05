# GODcss
GODcss is a gulp program that automates your SCSS to CSS compilation.

## Getting Started

### Prerequisites
In order to use Gulp you need to have [Node.js](https://nodejs.org/en/) installed on your system.)

### Installing
Clone this repo.
```
git clone https://github.com/bhadresharya/github.git
```
### Setting up
GODcss project has the following structure:
```
GODcss
├── css
│   └── style.css 
├── scss
│   └── style.scss
├── gulpfile.js
├── index.html
└── package.json
```
* Process ```scss/style.scss``` to ```css/style.css```

Now install the dependencies by running:
```
npm install
```
This creates node_modules directory with all the gulp plugins in the root of your project we specified in ```package.json```.
### gulp-plugin used
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) - Compiles SCSS into CSS
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - Add prefixes into compiled CSS code
* [gulp-shorthand](https://www.npmjs.com/package/gulp-shorthand) - Makes CSS lighter
* [gulp-uncss](https://www.npmjs.com/package/gulp-uncss) - Remove unused CSS
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - Minifies CSS
* [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) - Groups media queries

Evetything set up and now try to run gulp default command.
```
gulp
```
### Usage
Now try making a change to the ```scss/style.scss``` and saving it. It will be compiled to ```css/style.css```.

The compiled CSS code will be minified and with the prefixes added (even if you forgot to use them in your scss code).

The compiled CSS code will be shorthanded and it will not have any unused code which is not used in your HTML.

It will group the same media queries into one with their content code.

#### Author
**Bhadresh Arya** | [twitter](https://twitter.com/bhadresharya)
### License
This project is licensed under the MIT License - see the [LICENSE.md](https://bhadresharya.github.io/GODcss/LICENSE.md) file for details
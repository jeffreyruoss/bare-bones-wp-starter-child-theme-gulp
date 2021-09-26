// node/16.6.2
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-csso');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

function css() {
    return src('./assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('.', {sourceRoot: './assets/css'}))
        .pipe(dest('./assets/css'))
        .pipe(browserSync.stream());
}

function js() {
    return src('./assets/js/scripts/*.js', { sourcemaps: true })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.min.js'))
        .pipe(dest('./assets/js/scripts-dest', { sourcemaps: true }));
}

function browser() {
    browserSync.init({
        proxy: 'https://mysite.local',
        files: [
            './**/*.php'
        ]
    });

    watch('./assets/sass/**/*.scss', css);
    watch('./assets/js/scripts/*.js', js).on('change', browserSync.reload);
}

exports.css = css;
exports.js = js;
exports.default = browser;

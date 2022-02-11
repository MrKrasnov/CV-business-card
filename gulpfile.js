const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

// Load plugins

const cssnano = require('gulp-cssnano');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');



function clear() {
    return src('./build/*', {
        read: false
    })
        .pipe(clean());
}

// CSS 

function css() {
    const source = './src/css/*.css';

    return src(source)
        .pipe(changed(source))
        .pipe(cssnano())
        .pipe(dest('./build/css/'))
        .pipe(browsersync.stream());
}

//fonts

function fonts() {
    const source = './src/css/fonts/*';

    return src(source)
        .pipe(changed(source))
        //it can't compresed to cssnano
        .pipe(dest('./build/css/fonts/'))
        .pipe(browsersync.stream());
}

//ibm font

function ibm() {
    const source = './src/css/fonts/IBM_Plex_Serif/*.ttf';

    return src(source)
        .pipe(changed(source))
        .pipe(dest('./build/css/fonts/IBM_Plex_Serif/'))
        .pipe(browsersync.stream());
}

//roboto font

function roboto() {
    const source = './src/css/fonts/Roboto/*.ttf';

    return src(source)
        .pipe(changed(source))
        .pipe(dest('./build/css/fonts/Roboto/'))
        .pipe(browsersync.stream());
}

// JS

function js() {
    const source = './src/js/*';

    return src(source)
        .pipe(changed(source))
        .pipe(dest('./build/js/'))
        .pipe(browsersync.stream());
}

// Optimize images

function img() {
    return src('./src/images/*')
        .pipe(imagemin())
        .pipe(dest('./build/images'));
}

// html

function html() {
    return src('./src/*.html')
        .pipe(dest('./build/'))
        .pipe(browsersync.stream());
}

// Watch files

function watchFiles() {
    watch('./src/css/fonts/IBM_Plex_Serif/*.ttf', ibm);
    watch('./src/css/fonts/Roboto/*.ttf', roboto);
    watch('./src/css/fonts/fonts.css', fonts);
    watch('./src/css/style.css', css);
    watch('./src/js/*', js);
    watch('./src/*.html', html);
    watch('./src/images/*', img);
}

// BrowserSync

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './build'
        },
        port: 3000
    });
}

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(html, js, fonts, ibm, roboto, css,  img));
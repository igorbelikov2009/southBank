const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./styles/scss/**/*.scss')
    // 2. pass that file through sass compiler
    .pipe(sass())
    // 3. where do I save the compiled css?
    .pipe(gulp.dest('./styles/css'))
    //4. stream changes to all browser
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./styles/scss/**/*.scss', style);
    gulp.watch('./templates/*.html').on('change', browserSync.reload);
}

// exports.style = style;
exports.watch = watch;

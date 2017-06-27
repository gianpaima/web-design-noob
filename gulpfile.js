var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "appWebDesign/"
    });

    gulp.watch("appWebDesign/scss/*.scss", ['sass']);
    gulp.watch("appWebDesign/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("appWebDesign/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("appWebDesign/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

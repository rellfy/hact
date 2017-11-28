const Gulp = require('gulp');

Gulp.task('watch', () => {

    global.isWatching = true;
    Gulp.watch('./client/**/*.scss', ['sass']);
});

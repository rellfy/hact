const Path = require('path');
const Gulp = require('gulp');
const Newer = require('gulp-newer');
const Concat = require('gulp-concat');
const sass = require('gulp-sass');


Gulp.task('sass', () => {
    const bundleConfigs = [{
        entries: [
            './client/sass/index.scss',
            './client/sass/font-awesome.scss'
        ],
        dest: './public',
        outputName: 'core.min.css'
    }];

    return bundleConfigs.map((bundleConfig) => {

        return Gulp.src(bundleConfig.entries)
            .pipe(Newer(Path.join(bundleConfig.dest, bundleConfig.outputName)))
            .pipe(Concat(bundleConfig.outputName))
            .pipe(sass({ compress: true }))
            .pipe(Gulp.dest(bundleConfig.dest));
    });
});

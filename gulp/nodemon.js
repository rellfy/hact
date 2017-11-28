const Gulp = require('gulp');
const Nodemon = require('gulp-nodemon');

Gulp.task('nodemon', () => {

    const nodeArgs = [/*--something*/];

    if (process.env.DEBUGGER) {
        nodeArgs.push('--debug');
    }

    Nodemon({
        script: './server/index.js',
        ext: 'js md',
        ignore: [
            'client/**/*',
            'gulp/**/*',
            'public/**/*',
            'node_modules/**/*'
        ],
        nodeArgs
    })
    .on('restart', (files) => {
        console.log('Change detected:', files);
    });
});

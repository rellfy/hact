const Gulp = require('gulp');
const Nodemon = require('gulp-nodemon');

Gulp.task('nodemon', () => {

    const nodeArgs = [];
    const args     = [];

    if (process.argv.includes('--debug')) {
        nodeArgs.push('--inspect');
        args.push('--debug');
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
        nodeArgs,
        args
    })
    .on('restart', (files) => {
        console.log('File change detected:', files);
    });
});

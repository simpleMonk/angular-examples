var gulp = require('gulp'),
    config = require('./tasks/config.js'),
    clean = require('./tasks/util.js').clean,
    watcher = require('./tasks/watcher.js'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch');

require('./tasks/templates.js');
require('./tasks/webserver.js');
require('./tasks/scripts.js');
require('./tasks/styles.js');
require('./tasks/dist.js');

var src = config.path.src,
    vendor = config.path.vendor;

gulp.task('default', function () {
    runSequence('prepare-dev', 'watch', 'run-dev-server');
});

gulp.task('watch', function () {
    watcher(['src/js', 'vendor/js'], function () {
        gulp.start('prepare-dev-js');
    });
    watcher('src/templates', function () {
        gulp.start('prepare-templates')
    });
    watcher('src/index.html', function () {
        gulp.start(['copy-index-file']);
    });
    watcher('src/css', function () {
        gulp.start([ 'copy-less-css']);
    });
    watcher('spec', function () {
        gulp.start(['lint-src-files', 'copy-browserified-specs']);
    });
});

gulp.task('clean-dev', function () {
    clean(config.path.development.self + "/*");
});

gulp.task('clean-dist', function () {
    clean(config.path.dist.self + "/*");
});

gulp.task('prepare-dev', function (cb) {
    runSequence('clean-dev',
        'prepare-dev-js',
        'prepare-dev-templates',
        'copy-less-css',
        cb);
});

gulp.task('prepare-dev-js', function () {
    runSequence('copy-vendor-js', 'copy-browserified-src-files', 'copy-browserified-specs');
});

gulp.task('prepare-dev-templates', ['copy-index-file', 'prepare-templates']);

gulp.task('build', function () {
    runSequence('clean-dist', ['build-js', 'build-css', 'build-templates'], 'run-dist-server');
});

gulp.task('build-dist', function () {
    runSequence('clean-dist', ['build-js', 'build-css', 'build-templates']);
});
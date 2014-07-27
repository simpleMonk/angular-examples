var config = require('./config.js'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('./util.js').clean,
    connect = require('gulp-connect'),
    runSequence = require('run-sequence'),
    src = config.path.src,
    dev = config.path.development;

gulp.task("copy-templates", function () {
    runSequence('clean-templates', function () {
        gulp.src(src.templates)
            .pipe(gulp.dest(dev.templates))
            .pipe(connect.reload())
            .on('end', function () {
                gutil.log('successfully copied html files')
            })
            .on('error', onError);
    });
});

gulp.task("copy-index-file", ['remove-index-file'], function () {
    gulp.src(src.index)
        .pipe(gulp.dest(dev.self))
        .pipe(connect.reload())
        .on('end', function () {
            gutil.log('successfully copied index file')
        })
        .on('error', onError);
});

gulp.task('clean-templates', function () {
    clean("./development/templates/*");
});

gulp.task('remove-index-file', function () {
    clean(dev.index);
});

function onError(err) {
    gutil.log('----------------------------');
    gutil.log(err.message);
    gutil.log('----------------------------');
}

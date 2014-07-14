var config = require('./config.js'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('./util.js').clean,
    connect = require('gulp-connect'),
    src = config.path.src,
    dev = config.path.development;

var clean_templates = clean(dev.templates);

gulp.task("copy-templates", clean_templates, function () {
    gulp.src(src.templates)
        .pipe(gulp.dest(dev.templates))
        .pipe(connect.reload())
        .on('end', function () {
            gutil.log('successfully copied html files')
        })
        .on('error', function (err) {
            gutil.log(err);
        });
});

var remove_index_file = clean(dev.index);

gulp.task("copy-index-file", remove_index_file, function () {
    gulp.src(src.index)
        .pipe(gulp.dest(dev.self))
        .pipe(connect.reload())
        .on('end', function () {
            gutil.log('successfully copied index file')
        })
        .on('error', function (err) {
            gutil.log(err);
        });
});


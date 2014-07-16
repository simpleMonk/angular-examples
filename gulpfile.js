var gulp = require('gulp'),
    config = require('./tasks/config.js'),
    clean = require('./tasks/util.js').clean,
    runSequence = require('run-sequence'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');

require('./tasks/templates.js');
require('./tasks/webserver.js');
require('./tasks/scripts.js');

var src = config.path.src;
var vendor = config.path.vendor;


gulp.task('clean-dev', function () {
    clean(config.path.development.self+"/*");
});


gulp.task('prepare-dev', function (cb) {
    runSequence('clean-dev',
        'prepare-dev-js',
        'prepare-dev-templates',
        cb);
});

gulp.task('prepare-dev-js',function(){
    runSequence('copy-vendor-js', 'copy-src-js','run-specs');
});

gulp.task('prepare-dev-templates', ['copy-index-file', 'copy-templates']);

gulp.task('watch', function () {
    gulp.watch([src.js, vendor.js], ['prepare-dev-js']);
    gulp.watch([src.templates], ['copy-templates']);
    gulp.watch([src.index], ['copy-index-file']);
    gulp.watch([src.specs], ['run-specs']);
});

gulp.task('default', function () {
    runSequence('prepare-dev',  'watch','run-dev-server');
});




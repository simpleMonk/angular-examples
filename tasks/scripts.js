var config = require('./config.js'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    ignore = require('gulp-ignore'),
    clean = require('./util.js').clean,
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha');


var vendor_js = config.path.vendor.js;
var src_js = config.path.src.js;
var development_js = config.path.development.js;
var src_spec_js = config.path.src.specs;
var development_spec_js = config.path.development.spec;

var clean_dev_vendor_js = function () {
    clean(development_js + "/vendor.js");
};

var clean_dev_app_js = function () {
    clean(development_js + "/app.js");
};

var clean_dev_spec_js = function () {
    clean(development_spec_js + "/spec.js");
};

gulp.task('vendor-scripts', clean_dev_vendor_js(), function () {
    gulp.src(vendor_js)
        .pipe(ignore(/rx.angular.min.js/))
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest(development_js))
        .pipe(connect.reload())
        .on('end', function () {
            gutil.log('successfully copied vendor scripts')
        })
        .on('error', function (err) {
            gutil.log(err);
        });
});

gulp.task('src-scripts', clean_dev_app_js(), function () {
    gulp.src(src_js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat("app.js"))
        .pipe(gulp.dest(development_js))
        .pipe(connect.reload())
        .on('end', function () {
            gutil.log('successfully copied source scripts');
        })
        .on('error', function (err) {
            gutil.log(err);
        });
});
gulp.task('run-specs', clean_dev_spec_js(), function () {
    gulp.src(src_spec_js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('spec.js'))
        .pipe(gulp.dest(development_spec_js))
        .pipe(mocha({
            reporter: 'spec',
            ui: 'bdd'
        }))
        .on('error', function (err) {
            gutil.log('----------------------------');
            gutil.log(err.message);
            gutil.log('----------------------------');
        });

});



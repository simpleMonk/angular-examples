var config = require('./config.js'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    ignore = require('gulp-ignore'),
    clean = require('./util.js').clean,
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha');


var vendorJsFiles = config.path.vendor.js;
var srcJsFiles = config.path.src.js;
var developmentJsPath = config.path.development.js;
var srcSpecJsFiles = config.path.src.specs;
var developmentSpecJsPath = config.path.development.spec;

var cleanDevVendorJsFile = function () {
    clean(developmentJsPath + "/vendor.js");
};

var cleanDevAppJsFile = function () {
    clean(developmentJsPath + "/app.js");
};

var cleanDevSpecJsFile = function () {
    clean(developmentSpecJsPath + "/spec.js");
};


gulp.task('copy-vendor-js', cleanDevVendorJsFile(), function () {
    gulp.src(vendorJsFiles)
        .pipe(ignore(/rx.angular.min.js/))
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest(developmentJsPath))
        .pipe(connect.reload())
        .on('end', function () {
            gutil.log('successfully copied vendor scripts')
        })
        .on('error', function (err) {
            gutil.log(err);
        });
});

gulp.task('copy-src-js', cleanDevAppJsFile(), function () {
    gulp.src(srcJsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat("app.js"))
        .pipe(gulp.dest(developmentJsPath))
        .pipe(connect.reload())
        .on('end', function () {
            gutil.log('successfully copied source scripts');
        })
        .on('error', function (err) {
            gutil.log(err);
        });
});


gulp.task('run-specs', cleanDevSpecJsFile(), function () {
    gulp.src(srcSpecJsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('spec.js'))
        .pipe(gulp.dest(developmentSpecJsPath))
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





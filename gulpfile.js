/*******************************************************************************
 *  Dependencies
 */
var gulp = require('gulp');
var log = require('gulp-util').log;
var rename = require('gulp-rename');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

/*******************************************************************************
 *  Jade task (optional to change the name of the file)
 */
gulp.task('templates', function() {
	var locs = {};
	gulp.src('./src/index.jade')
	    .pipe(jade({ locals: locs }))
	    .pipe(rename('index.html'))
	    .pipe(gulp.dest('./dist/'))
});

/*******************************************************************************
 *  Stylus task (optional to change the name of the file)
 */
gulp.task('styles', function() {
           gulp.src('./src/styles/style.styl')
               .pipe(stylus())
               .pipe(rename('style.css'))
               .pipe(gulp.dest('./dist/css'))
});

/*******************************************************************************
 *  Javascript task
 */
gulp.task('scripts', function() {
	gulp.src('./src/js/**')
	    .pipe(gulp.dest('./dist/js'))
});

/*******************************************************************************
 *  Watch task
 */
gulp.task('watch', function() {
	log('Watching files');
	gulp.watch('./src/**/*.*', ['build']);
});

/*******************************************************************************
 *  Command line task commands
 */
gulp.task('build', ['templates', 'styles', 'scripts']);
gulp.task('default', ['build', 'watch']);

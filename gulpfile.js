var gulp = require('gulp');

var minifyJS = require('gulp-uglify');

var minifyCSS = require('gulp-minify-css');

gulp.task('compress-css', function() {
	gulp.src('./src/angular-popover.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist'));
})

gulp.task('compress-js', function() {
	gulp.src('./src/angular-popover.js')
		.pipe(minifyJS())
		.pipe(gulp.dest('./dist'))
})
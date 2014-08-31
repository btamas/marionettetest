var gulp = require('gulp'),
	browserify = require('gulp-browserify');

gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('index.js')
        .pipe(browserify({
			transform: ['debowerify']
        }))
        .pipe(gulp.dest('./public/bundle.js'))
});

gulp.task('default', ['scripts']);
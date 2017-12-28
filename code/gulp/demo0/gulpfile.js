var gulp = require('gulp');


var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');

//gulp.src | gulp.dest | gulp.task | gulp.watch

gulp.task('build:css', function() {

    gulp.src('./src/css/*.css')
    		.pipe(concat('index-merge.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['build:css'])


/*






gulp.task('build:css', function() {

});

gulp.task('build:js', function() {

});

*/
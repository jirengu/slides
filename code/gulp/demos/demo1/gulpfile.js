/**
 * @fileOverview [description]
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-22 
 */

var gulp = require('gulp');

// 引入组件
var minifycss = require('gulp-minify-css'), // CSS压缩
	uglify = require('gulp-uglify'), // js压缩
	concat = require('gulp-concat'), // 合并文件

	rename = require('gulp-rename'), // 重命名
	clean = require('gulp-clean'), //清空文件夹

	minhtml = require('gulp-htmlmin'), //html压缩
	jshint = require('gulp-jshint'), //js代码规范性检查
	imagemin = require('gulp-imagemin'); //图片压缩


gulp.task('html', function() {

  return gulp.src('src/*.html')
    .pipe(minhtml({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function(argument) {

	gulp.src('src/css/*.css')
		.pipe(concat('merge.min.css'))
		// .pipe(rename({
		// 	suffix: '.min'
		// }))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css/'));
});
gulp.task('js', function(argument) {
	gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))

		.pipe(concat('merge.js'))
		// .pipe(rename({
		// 	suffix: '.min'
		// }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('img', function(argument){
	gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'));
});


gulp.task('clear', function(){
	gulp.src('dist/*',{read: false})
		.pipe(clean());
});


gulp.task('build', ['html', 'css', 'js', 'img']);

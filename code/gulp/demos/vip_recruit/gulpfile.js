    var gulp = require('gulp');
    var rev = require('gulp-rev'); //添加版本号
    var revReplace = require('gulp-rev-replace'); //版本号替换
    var useref = require('gulp-useref'); //解析html资源定位
    var gulpif = require('gulp-if');
    var filter = require('gulp-filter');
    var uglify = require('gulp-uglify');
    var csso = require('gulp-csso'); //css优化压缩
    var clean = require('gulp-clean');
    var imagemin = require('gulp-imagemin');
    var concat = require('gulp-concat');
    var less = require('gulp-less');
    var autoprefixer = require('gulp-autoprefixer');
    var connect = require('gulp-connect');

    gulp.task("dist:img", () =>
        gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
    );


    gulp.task("dist:css", function() {
        gulp.src('dist/css/*').pipe(clean());
        return gulp.src('src/**/*.less')
            .pipe(less())
            .pipe(csso())
            .pipe(concat('merge.css'))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('dist/css'))
    })

    gulp.task("src:css", function() {
        gulp.src('src/css/*').pipe(clean());
        return gulp.src('src/less/*.less')
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('src/css'))
    })

    gulp.task("dist:js", function() {
        gulp.src('dist/js/*').pipe(clean());
        return gulp.src('src/**/*.js')
            .pipe(uglify())
            .pipe(concat('merge.js'))
            .pipe(gulp.dest('dist/js'))
    })

    gulp.task("revision", ['dist:css', 'dist:js'], function() {
        return gulp.src(["dist/**/*.css", "dist/**/*.js"])
            .pipe(rev())
            .pipe(gulp.dest('dist'))
            .pipe(rev.manifest())
            .pipe(gulp.dest('dist'))
    })

    gulp.task("index", ["revision"], function() {
        var manifest = gulp.src("./dist/rev-manifest.json");

        return gulp.src("src/index.html")
            .pipe(revReplace({
                manifest: manifest
            }))
            .pipe(useref())
            .pipe(gulp.dest('dist'));
    });

    gulp.task("watch", function() {
        gulp.watch('src/**/*.less', ['src:css'])
    })


    gulp.task('connect', function() {
        connect.server({
            root: 'src',
            livereload: true
        });
    });

    gulp.task('reload', function() {
        gulp.src('src/*.html')
            .pipe(connect.reload());
    });

    gulp.task('change', function() {
        gulp.watch(['src/**/*'], ['src:css', 'reload']);
    });

    gulp.task('server', ['connect', "change"]);
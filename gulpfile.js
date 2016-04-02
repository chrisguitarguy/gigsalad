var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var envify = require('loose-envify/custom');

var bundler = function (filename, debug, env) {
    return browserify('application/js/app.js', {
        insertGlobals: true,
        debug: !!debug,
        plugins: [
            'transform-object-rest-spread',
        ],
        transform: [
            babelify.configure({
                presets: ['es2015', 'react', 'stage-2']
            })
        ]
    })
    .transform(envify({
        NODE_ENV: env
    }), {global: true})
    .bundle()
    .pipe(source(filename))
}

gulp.task('js:prod', function() {
    return bundler('app.min.js', false, 'production')
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets'));
});

gulp.task('js:dev', function () {
    return bundler('app.js', true, 'development')
        .pipe(gulp.dest('./assets'));
});

gulp.task('js', ['js:dev', 'js:prod']);

gulp.task('fonts', function () {
    gulp.src('./node_modules/bootstrap-sass/assets/fonts/**/*.*')
        .pipe(gulp.dest('./assets/fonts'));
});

gulp.task('sass', ['fonts'], function () {
    gulp.src('./application/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                './src/sass',
                './node_modules/bootstrap-sass/assets/stylesheets',
            ],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets'));
});

gulp.task('watch:js', function() {
    gulp.watch(['*.js', 'application/**/*.js'], ['js']);
});

gulp.task('watch:sass', function () {
    gulp.watch(['application/**/*.scss'], ['sass']);
});

gulp.task('watch', ['watch:js', 'watch:sass']);

gulp.task('compile', ['js', 'sass']);

gulp.task('default', ['compile']);

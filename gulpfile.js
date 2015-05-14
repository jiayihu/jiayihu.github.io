/*jshint browser: true, devel: true, node: true*/
/**
 *
 * This is a custom gulpfile.js configuration, derived from Web Starter Kit
 *
 */
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    pagespeed = require('psi');

var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

gulp.task('minifyJs', function() {
    gulp.src('src/js/*.js')
        .pipe($.stripDebug())
        .pipe($.uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('minifyCss', function() {
    gulp.src('src/css/*.css')
        .pipe($.csso())
        .pipe(gulp.dest('dist/css/'))
        .pipe($.size({
            title: 'Styles size'
        }));
});

gulp.task('combineCss', function() {
    gulp.src('dist/css/*.css')
        .pipe($.combineMediaQueries())
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('styles', function() {
    gulp.src([
            'src/css/sass/webstarterkit.scss',
            'src/css/sass/*.scss'
        ])
        .pipe($.changed('src/css/', {
            extension: '.css'
        }))
        .pipe($.rubySass({
                style: 'expanded',
                precision: 10,
                sourcemapPath: './'
            })
            .on('error', console.error.bind(console))
        )
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('src/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('serve', function() {
    browserSync({
        'server': 'src/',
        'files': ['src/*.html']
    });

    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/css/sass/**/*.scss', ['styles']);
    gulp.watch('src/js/*.js', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task('pagespeed', pagespeed.bind(null, {
    // By default, we use the PageSpeed Insights
    // free (no API key) tier. You can use a Google
    // Developer API key if you have one. See
    // http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
    url: 'https://example.com',
    strategy: 'mobile'
}));

gulp.task('copyHtml', function() {
   gulp.src('src/*.html')
   .pipe($.replace('"index.html"', '"/index"'))
   .pipe($.replace('"about.html"', '"/about"'))
   .pipe($.replace('"portfolio.html"', '"/portfolio"'))
   .pipe($.replace('"contact.html"', '"/contact"'))
   .pipe(gulp.dest('dist/'));
});

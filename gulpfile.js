'use strict';

const gulp        = require('gulp'),
      stylus      = require('gulp-stylus'),
      cssmin      = require('gulp-cssmin'),
      poststylus  = require('poststylus'),
      plumber     = require('gulp-plumber'),
      rupture     = require('rupture'),
      koutoSwiss  = require('kouto-swiss'),
      uglify      = require('gulp-uglify'),
      concat      = require('gulp-concat'),
      gcmq        = require('gulp-group-css-media-queries'),
      rename      = require('gulp-rename'),
      browserSync = require('browser-sync'),
      { spawn }   = require('child_process');

const messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

const path = {
  dev: 'src',
  prod: 'assets'
}

gulp.task('jekyll-build', done => {
  browserSync.notify(messages.jekyllBuild);

  const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

  return spawn(jekyll, ['build'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], () => browserSync.reload());

gulp.task('browser-sync', ['jekyll-build'], () => {
  browserSync({
    server: {baseDir: '_site/'},
    open: false
  });
});

gulp.task('stylus', () => {
  gulp.src(path.dev + '/stylus/stoque.styl')
    .pipe(plumber())
    .pipe(stylus({
      use:[rupture(), koutoSwiss()]
    }))
    .pipe(gcmq())
    .pipe(gulp.dest('_site/assets/styles'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(path.prod + '/styles'));
});

gulp.task('css-min', function() {
	gulp.src( path.prod + '/styles/stoque.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('_site/assets/styles/'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(path.prod + '/styles'));
});

gulp.task('js', () => {
	return gulp.src(path.dev + '/scripts/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('_site/assets/scripts/'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(path.prod + '/scripts'))
});

gulp.task('watch', ['stylus', 'browser-sync'], () => {
	gulp.watch(path.dev + '/stylus/**/**.styl', ['stylus']);
	gulp.watch(path.dev + '/scripts/**/*.js', ['js']);
	gulp.watch(path.dev + '/images/**/*.{jpg,png,gif}', ['imagemin']);
	gulp.watch(['*.{html,md}', '_includes/*', '_layouts/*', '_posts/*'], ['jekyll-rebuild']);
	gulp.watch(path.prod + '/styles/stoque.css', ['css-min'])
});

gulp.task('dev', ['js', 'stylus', 'browser-sync', 'watch']);
gulp.task('prod', ['js', 'stylus', 'css-min', 'browser-sync', 'watch']);
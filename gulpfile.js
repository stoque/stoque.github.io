// =========================
// Modules
// =========================

var gulp 				= require('gulp'),
		stylus 			= require('gulp-stylus'),
		poststylus	= require('poststylus'),
		cssmin			= require('gulp-cssmin'),
		plumber			= require('gulp-plumber'),
		rupture			= require('rupture'),
		koutoSwiss 	= require('kouto-swiss')
		uglify 			= require('gulp-uglify'),
		concat			= require('gulp-concat'),
		imagemin		= require('gulp-imagemin'),
		pngquant		= require('imagemin-pngquant'),
		gcmq 				= require('gulp-group-css-media-queries'),
		rename			= require('gulp-rename'),
		browserSync = require('browser-sync'),
		cp					= require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};		

// Directories
path = {
	dev		: 'src',
	prod	: 'assets'
}

// =========================
// Tasks
// =========================

/**
 * Monta o site do Jekyll
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll.bat', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Refaz o site e atualiza a página
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Espera até que o jekyll-build seja executado e então levanta o
 * servidor utilizando o _site como pasta raiz
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: { baseDir: '_site/' },
        open: false
    });
});

// Call Stylus
gulp.task('stylus', function() {
	gulp.src( path.dev + '/stylus/main.styl')
		.pipe(plumber())
		.pipe(stylus({
			use:[rupture(), koutoSwiss(), poststylus('lost')]
		})) 
		.pipe(gcmq())
		.pipe(gulp.dest('_site/assets/styles/'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(path.prod + '/styles'));
});

// Call CSS minify
gulp.task('css-min', function() {
	gulp.src( path.prod + '/styles/main.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('_site/assets/styles/'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(path.prod + '/styles'));
});

// Call javascript uglify and concat
gulp.task('js', function(){
	return gulp.src(path.dev + '/scripts/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('_site/assets/scripts/'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(path.prod + '/scripts'))
});

// Call task Imagemin
gulp.task('imagemin', function() {
	return gulp.src(path.dev + '/images/**/*')
		.pipe(plumber())
		.pipe(imagemin({ 
			optimizationLevel: 3, 
			progressive: true, 
			interlaced: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest(path.prod + '/images/'));
});

// Call Watch
gulp.task('watch', ['stylus', 'browser-sync'], function() {
	gulp.watch(path.dev + '/stylus/**/**.styl', ['stylus']);
	gulp.watch(path.dev + '/scripts/**/*.js', ['js']);
	gulp.watch(path.dev + '/images/**/*.{jpg,png,gif}', ['imagemin']);
	gulp.watch(['*.{html,md}', '_includes/*', '_layouts/*', '_posts/*'], ['jekyll-rebuild']);
	gulp.watch(path.prod + '/styles/main.css', ['css-min'])
});

//Default Task
gulp.task('default', ['js','stylus', 'css-min', 'browser-sync', 'watch']);

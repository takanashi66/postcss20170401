var rootpath			= 'htdocs/';
var cmnpath				= rootpath + 'common/';

var gulp 					= require('gulp');
var browserSync		= require('browser-sync');
var postcss				= require('gulp-postcss');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: rootpath
		}
    //proxy: "http://"
	});
});


gulp.task("browser-reload", function() {
  browserSync.reload();
});

var browsers = [
    'last 2 version',
    'ie 6',
    'firefox 2',
    'iOS >= 8.1',
    'Android >= 4.4'
];

gulp.task('postcss', function(){
	gulp.src(cmnpath + 'postcss/*.css')
	.pipe(postcss([
		require('postcss-cssnext')({browsers: browsers}),
    require('css-mqpacker'),
    require('postcss-import'),
    require('csswring')
	]))
	.pipe(gulp.dest(cmnpath + 'css'))
	.pipe(browserSync.stream());
});


gulp.task('watch', function(){
	gulp.watch(cmnpath + 'postcss/**/*.pcss',['postcss']);
	gulp.watch(
		[
			rootpath	+	'**/*.html',
			rootpath	+	'**/*.php',
			cmnpath		+ 'js/**/*.js'
		],
		['browser-reload']);
});


gulp.task('default', ['browser-sync','watch']);

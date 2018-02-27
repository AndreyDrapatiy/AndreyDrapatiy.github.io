var gulp			= require('gulp'),
	fileinclude		= require('gulp-file-include'),
	gutil			= require('gulp-util' ),
	sass			= require('gulp-sass'),
	browserSync		= require('browser-sync'),
	concat			= require('gulp-concat'),
	uglify			= require('gulp-uglify'),
	cleanCSS		= require('gulp-clean-css'),
	rename			= require('gulp-rename'),
	del				= require('del'),
	imagemin		= require('gulp-imagemin'),
	cache			= require('gulp-cache'),
	autoprefixer	= require('gulp-autoprefixer'),
	ftp				= require('vinyl-ftp'),
	notify			= require("gulp-notify");



gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('fileinclude', function () {

	return gulp.src([
		"app/html/pages/index.html",
		"app/html/pages/add_role.html",
		"app/html/pages/add_user.html",
		"app/html/pages/calendar.html",
		"app/html/pages/element_type.html",
		"app/html/pages/element_types.html",
		"app/html/pages/language.html",
		"app/html/pages/list_roles.html",
		"app/html/pages/login.html",
		"app/html/pages/search_video.html",
		"app/html/pages/titles.html",
		"app/html/pages/users.html",
		"app/html/pages/popups.html",
		
	])

	.pipe(fileinclude({
		prefix: '@@',
		basepath: '@file'
	}))

	.pipe(gulp.dest('app/'))

	.pipe(browserSync.reload({stream: true}));
});


// Скрипты проекта

gulp.task('main-script', function() {
	return gulp.src([
		'app/js/common.js',
	])
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	// .pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('libs-script', function() {
	return gulp.src([
		'app/libs/jquery/jquery-2.2.4.min.js',
		'app/libs/jquery-ui/jquery-ui.min.js',
		'app/libs/bootstrap/bootstrap.js',
		'app/libs/magnific-popup/jquery.magnific-popup.min.js',
		'app/libs/nice-select/jquery.nice-select.js',
		'app/libs/masked-input/jquery.maskedinput.min.js',
		'app/libs/sweet-alert/sweetalert.min.js',
		'app/libs/custom-scroll/jquery.mCustomScrollbar.concat.min.js',
		'app/libs/form-validator/jquery.form-validator.min.js',
		'app/libs/video-js/video.js',
		'app/libs/video-js/videojs-ie8.min.js',
		'app/libs/detectmobilebrowser.js',
		

		])
	.pipe(concat('libs.js'))
	// .pipe(uglify()) // Минимизировать весь js
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

// Стили проекта

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass().on("error", notify.onError()))
	//.pipe(rename({suffix: '.min', prefix : ''})) // Добавить суфикс .min
	.pipe(autoprefixer(['last 15 versions']))
	//.pipe(cleanCSS()) // Минимизировать весь css
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});


// Следить за изменениями в файлах


// Таск с работающим файл импортом

gulp.task('watch', ['fileinclude', 'sass', 'main-script', 'libs-script', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['main-script', 'libs-script']);
	gulp.watch('app/html/**/*.html', ['fileinclude']);
	gulp.watch('app/*.html', browserSync.reload);
});

// Таск без файл импорта

// gulp.task('watch', ['sass', 'main-script', 'libs-script', 'browser-sync'], function() {
// 	gulp.watch('app/sass/**/*.sass', ['sass']);
// 	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['main-script', 'libs-script']);
// 	gulp.watch('app/*.html', browserSync.reload);
// });


// Сжимать картинки при билде

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});

// Сборка проекта к релизу

gulp.task('build', ['removedist', 'imagemin', 'sass', 'main-script', 'libs-script'], function() {

	var buildFiles = gulp.src([
		'app/*.html',
		'app/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});


// Выгрузка файлов на ftp

gulp.task('deploy', function() {

	var conn = ftp.create({
		host:		'webeps.ftp.ukraine.com.ua',
		user:		'webeps_admin',
		password:	'M30fZNod63',
		parallel:	10,
		log: 		gutil.log
	});

	var globs = [
	'app/**',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/webeps.com/dashboard'));

});

// Очищаем папку dist при каждом билде
gulp.task('removedist', function() { return del.sync('dist'); });

// Очищаем кэш
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);

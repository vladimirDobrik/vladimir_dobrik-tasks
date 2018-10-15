var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src(['src/scss/*.scss'])
    		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   			.pipe(gulp.dest('src/css'));
})

gulp.task('watch', function(){
    gulp.watch(['src/scss/*.scss'], ['sass']);
})

gulp.task('default', ['sass', 'watch']);
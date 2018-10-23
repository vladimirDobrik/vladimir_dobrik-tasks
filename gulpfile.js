var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src(['src/task3/scss/style.scss'])
    		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   			.pipe(gulp.dest('src/task3/css'));
})

gulp.task('watch', function(){
    gulp.watch(['src/task3/scss/style.scss'], ['sass']);
})

gulp.task('default', ['sass', 'watch']);
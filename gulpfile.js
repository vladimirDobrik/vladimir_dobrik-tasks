const gulp = require('gulp');
const mocha = require('gulp-mocha');
// const sass = require('gulp-sass');

// gulp.task('sass', () =>
//      gulp.src(['src/task3/scss/style.scss'])
//     	 .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//    		 .pipe(gulp.dest('src/task3/css'))
// );

// gulp.task('watch', () =>
//     gulp.watch(['src/task3/scss/landing/footer/*.scss'], ['sass'])
// );

gulp.task('task1', () => 
    gulp.src('./src/js/task_1/task1/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
);

gulp.task('task2', () => 
    gulp.src('./src/js/task_1/task2/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
);

gulp.task('task3', () => 
    gulp.src('./src/js/task_1/task3/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
);

gulp.task('task4', () => {
    gulp.src('./src/js/task_1/task4/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('task5', () => {
    gulp.src('./src/js/task_1/task5/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('task6', () => {
    gulp.src('./src/js/task_1/task6/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('task7', () => {
    gulp.src('./src/js/task_1/task7/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('task8', () => {
    gulp.src('./src/js/task_1/task8/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('task10', () => {
    gulp.src('./src/js/task_1/task9/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('default', ['task8']);
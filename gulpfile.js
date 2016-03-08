/**
 * Created by christiankirschberg on 04/02/16.
 */


var gulp = require('gulp'); //tool
var less = require('gulp-less'); //library for compiling less -> css

gulp.task('styles', function() {
   gulp.src('menu.less')
       .pipe(less())
       .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
   gulp.watch('menu.less',
       ['styles']);
});

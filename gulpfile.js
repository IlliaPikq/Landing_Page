import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

gulp.task('convertToWebP', () => {
  return gulp.src('./images/*.{jpg,png}')
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest('./images'));
});

gulp.task('default', gulp.series('convertToWebP'));
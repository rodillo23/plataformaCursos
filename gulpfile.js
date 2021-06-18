const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')

gulp.task('sass', ()=>{
  return gulp.src('scss/app.scss')
    .pipe(autoprefixer())
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('watch', ()=>{
  gulp.watch('scss/*.scss', gulp.series('sass'))
})
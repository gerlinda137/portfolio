const gulp = require("gulp");

module.exports = () =>
  gulp
    .src(["src/*.html"], {
      base: "src",
    })
    .pipe(gulp.dest("build"));

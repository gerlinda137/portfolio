const gulp = require("gulp");

const server = require("browser-sync").create();
const rebuild = require("./rebuild");

function reload(cb) {
  server.reload();
  cb();
}

module.exports = function serve(cb) {
  server.init({
    server: "build",
    notify: false,
    open: true,
    cors: true,
  });

  gulp.watch("src/**", gulp.series(rebuild, reload));

  return cb();
};

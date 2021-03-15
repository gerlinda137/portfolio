const gulp = require("gulp");

const serve = require("./gulp/tasks/serve");
const rebuild = require("./gulp/tasks/rebuild");

function setProductionMode(isProduction = false) {
  return (cb) => {
    process.env.NODE_ENV = isProduction ? "production" : "development";
    cb();
  };
}

module.exports.start = gulp.series(setProductionMode(false), rebuild, serve);
module.exports.build = gulp.series(setProductionMode(true), rebuild);

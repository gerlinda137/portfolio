const gulp = require("gulp");

const clean = require("./clean");
const html = require("./html");
const styles = require("./styles");
const script = require("./script");
const fonts = require("./fonts");
const imageMinify = require("./imageMinify");

const build = gulp.parallel(html, styles, script, fonts, imageMinify);

module.exports = gulp.series(clean, build);

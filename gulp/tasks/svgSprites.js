const { src, dest, parallel } = require("gulp");
const svgSprite = require("gulp-svg-sprite");

// Basic configuration example
const svgspriteConfig = {
  mode: {
    stack: {
      sprite: "../sprite.svg", //sprite file name
    },
  },
};

module.exports = function buildSvg() {
  return src("**/*.svg", { cwd: "src/img" })
    .pipe(svgSprite(svgspriteConfig))
    .pipe(dest("build/img"));
};

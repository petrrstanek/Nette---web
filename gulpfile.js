const { src, dest, watch, series } = require('gulp');

const terser = require('gulp-terser');

function minifyJS() {
  return src('app/assets/dist/web.bundle.js').pipe(terser()).pipe(dest('app/assets/dist/js'));
}

exports.default = series(minifyJS);

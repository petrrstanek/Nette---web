const {src, dest, watch, series} = require('gulp');

const terser = require('gulp-terser');

function minifyJS(){
    return src('web/dist/web.bundle.js') .pipe(terser()).pipe(dest('dist/assets/js'))
}

exports.default = series(minifyJS)
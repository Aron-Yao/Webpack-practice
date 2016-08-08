var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

config = {
  shape: {
    dimension: {         // Set maximum dimensions
      maxWidth: 32,
      maxHeight: 32
    },
    spacing: {         // Add padding
      padding: 10
    },
    dest: 'out/intermediate-svg'    // Keep the intermediate files
  },
  mode: {
    view: {        // Activate the «view» mode
      bust: false,
      render: {
        scss: true      // Activate Sass output (with default options)
      }
    },
    symbol: true      // Activate the «symbol» mode
  }
};

gulp.task('sprites', function () {
  return gulp.src('assets/svg/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('out'));
});

// Packages.
const gulp = require('gulp'),
    glob = require('glob'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream');

// All file sources.
const sources = {
    scripts: 'src/*.js'
};

// All file destinations.
const destinations = {
    scripts: 'dist/js/'
};

// Build all utilities.
gulp.task('build', finished => {
    const utilities = glob.sync(sources.scripts);

    // Loop over all files and create bundles.
    const tasks = utilities.map(entry => {
        return browserify({ entries: [ entry ] })
            .bundle()
            .pipe(source(entry))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(rename(path.basename(entry)))
            .pipe(gulp.dest(destinations.scripts));
    });

    // Mark task as finished.
    finished();
});

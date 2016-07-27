var gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    browserify = require("browserify"),
    babelify = require("babelify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    history = require("connect-history-api-fallback"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require('gulp-sourcemaps');

var config = {
    port: 3009,
    paths: {
        dist: "./dist",
        entry: "./src/js/index.js",
        js: "./src/js/**/*.js",
        sass: "src/sass/**/*.scss",
        sassMain: "./src/sass/main.scss"
    }
}

function logError(e) {
    console.error(e.message);
    this.emit('end');
}

gulp.task("default", ["browserSync"], function() {
    gulp.watch(config.paths.js, ["build"]);
    gulp.watch(config.paths.sass, ["sass"]);
});

gulp.task("build", function () {
    // process.env.NODE_ENV = 'production';
    return browserify({ entries: config.paths.entry, debug: true })
        .transform("babelify", {
            presets: ["es2015", "react"],
            plugins: ["transform-object-rest-spread"],
        })
        .bundle()
        .on("error", function(e) {
            console.error(e.message);
            this.emit('end');
        })
        .pipe(source("bundle.js"))
        // .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest(config.paths.dist + "/js"))
        .pipe(browserSync.stream())
});

gulp.task("sass", function() {
    return gulp.src(config.paths.sassMain)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.dist + "/css"))
        .pipe(browserSync.stream());
});

gulp.task("browserSync", function () {
    browserSync.init({
        port: config.port,
        server: {
            baseDir: config.paths.dist,
            middleware: [history()]
        }
    })
});

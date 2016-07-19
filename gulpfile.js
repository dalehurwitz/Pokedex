var gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    browserify = require("browserify"),
    babelify = require("babelify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    history = require("connect-history-api-fallback"),
    uglify = require("gulp-uglify");

var config = {
    port: 3009,
    paths: {
        dist: "./dist",
        entry: "./src/index.js",
        js: "./src/**/*.js"
    }
}

gulp.task("default", ["browserSync"], function() {
    gulp.watch(config.paths.js, ["build"]);
});

gulp.task("build", function () {
    // process.env.NODE_ENV = 'production';
    browserify({ entries: config.paths.entry, debug: true })
        .transform("babelify", {
            presets: ["es2015", "react"],
            plugins: ["transform-object-rest-spread"],
        })
        .on("error", console.log.bind(console))
        .bundle()
        .pipe(source("bundle.js"))
        // .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest(config.paths.dist + "/js"))
        .pipe(browserSync.stream())
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

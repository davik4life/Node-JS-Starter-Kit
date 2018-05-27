var gulp = require("gulp"),
  sass = require("gulp-sass"),
  image = require("gulp-image"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  ejs = require("gulp-ejs"),
  minifyEjs = require("gulp-minify-ejs"),
  stripEJSComments = require('gulp-strip-comments'),
  nodemon = require('gulp-nodemon');


//Creates a browser-sync proxy
gulp.task('init', ["nodemon"], function () {
  browserSync.init({
    proxy: 'http://localhost:3000', //APP.js port number - Listens On This Port
    port: 3128, //Browser Sync Port  - Actually Running On 3000 but proxy browser sync runs on 3128
    serveStatic: [ './Public/'], // Starting Point For Gulpfile -  (ESSENTIAL PART, WONT WORK WITHOUT IT)
    reloadOnRestart: true, // auto-reload all browsers following a Browsersync reload 
    ghostMode:false, 
    watchEvents : [ 'change', 'add', 'unlink', 'addDir', 'unlinkDir' ], //Adds all watch events
  });
});

//Starts the express server
gulp.task('nodemon', function (done) {
  var running = false; //Default State

  return nodemon({
    script: 'index.js', //APP JS File
    watch: ["./Assets/", "./Public/"] //Source And Build Files
  })

    .on('start', function () {

      /*
      - If the running variable is true then run done Function
      - Else startup server
    */
      if (!running) {
        done();
      }
      running = true;
    })

    //Minor Dely Of 500ms Upon Restart
    .on('restart', function () {
      setTimeout(function () {
        reload();
      }, 500);
    });
}
);


//Builds the entire project
gulp.task("build", ["ejs", "styles", "images", "javascript", "routes"], function () {
  console.log("Build Success");
});


//Compiles the styling
gulp.task("styles", function () {

  return gulp.src("./assets/stylesheet/APP.scss")

    .on('error', sass.logError)

    .pipe(sass({
      outputStyle: 'compressed'
    }))

    .pipe(gulp.dest("./public/css/"))

    .pipe(browserSync.reload({ stream: true }));
});

//Compiles the express route/s
gulp.task("routes", function () {

  return gulp.src("./assets/routes/*.js")

    .pipe(uglify())

    .pipe(gulp.dest("./public/routes/"))

    .pipe(browserSync.stream({ stream: true }));
});

//Compresses all images
gulp.task("images", function () {

  return gulp.src("./assets/images/*")

    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true // defaults to false
    }))
    
    .pipe(gulp.dest("./public/images/"))

    .pipe(browserSync.stream({ stream: true }));
});

//Compiles javascript
gulp.task("javascript", function () {

  return gulp.src([
    "./node_modules/jquery/dist/jquery.js",
    "./assets/scripts/validation.js",
    "./assets/scripts/menu.js",
    "./node_modules/tether/dist/js/tether.js",
    "./node_modules/bootstrap/dist/js/bootstrap.js"
  ])

    .pipe(concat("main.js"))

    .pipe(uglify())

    .pipe(gulp.dest("./public/scripts/"))

    .pipe(browserSync.stream({ stream: true }));
});

//Compiles ejs anlong with the partials
gulp.task("ejs", ["ejs-partials"], function () {

  gulp.src("./assets/views/*.ejs")

    .pipe(stripEJSComments())

    .pipe(minifyEjs({}))

    .pipe(gulp.dest("./public/views/"))

    .pipe(browserSync.stream({ stream: true }));
});

//Compiles partials
gulp.task("ejs-partials", function () {

  return gulp.src("./assets/views/partials/*.ejs")

    .pipe(stripEJSComments())

    .pipe(minifyEjs({}))

    .pipe(gulp.dest("./public/views/partials/"))

    .pipe(browserSync.stream({ stream: true }));
});

//Builds the entire project
gulp.task("build", ["images","ejs", "styles", "javascript", "routes"], function () {
  console.log("Build Success");
});

//Default task array
gulp.task("default", ["build", "init"], function (done) {
  gulp.watch("./assets/stylesheet/**/*.scss", ["styles"]);
  gulp.watch("./assets/scripts/*", ["javascript"]);
  gulp.watch("./assets/routes/*.js", ["routes"]);
  gulp.watch("./assets/images/*", ["images"]);
  gulp.watch("./assets/views/*.ejs", ["ejs"]);
  gulp.watch("./assets/views/partials/*.ejs", ["ejs-partials"]);
  browserSync.reload
  done();
});

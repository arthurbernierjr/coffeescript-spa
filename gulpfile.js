const gulp = require("gulp")
const coffee = require("gulp-coffee")
const consola = require("consola")
const browserSync = require("browser-sync").create()
const reload = browserSync.reload
const nodemon = require("nodemon")
const exec = require('child_process').exec


gulp.task('default', cb => {
  consola.info('Starting to build files')
  exec('yarn build')
  nodemon({
    script: 'server.coffee',
    env: { 'NODE_ENV': 'development'}
  })
  consola.success('Successfully Started Back End Server')

  consola.info('Starting Front End')

  browserSync.init({
    proxy: {
      target: 'http://localhost:8000',
      ws: true
    },
    serveStatic: ['.', './public']
  })
   consola.info('Front End Listening')
   consola.success('App Set Up')

   gulp.watch('./lib/**/*', gulp.task('coffee'))
      gulp.watch([
        './public/**/*',
        './public/*'
   ]).on('change', (file) => {
     consola.success('Reloaded due to change')
     console.log(file)
     return reload()
   });
  cb();
})

gulp.task('coffee', cb => {
  gulp.src('./lib/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./public/js/'));
  consola.success('Built from CoffeeScript to JavaScript');
  cb();
})

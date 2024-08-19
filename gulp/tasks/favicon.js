export const favicon = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/favicons/**/*.*`, { soursemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'FAVICON',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(app.gulp.dest(`${app.path.buildFolder}/favicons`))
    .pipe(app.plugins.browsersync.stream());
};

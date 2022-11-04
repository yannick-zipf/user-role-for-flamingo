'use strict';

const
    dir = {
        src:   'user-role-for-flamingo',
        build: '../wordpress/wp-content/plugins/user-role-for-flamingo/'
    },
    gulp          = require('gulp'),
    newer         = require('gulp-newer')
;

// Browser-sync
var browsersync = false;

// copy  files
gulp.task('copy', () => {
    return gulp.src(dir.src + "/**/*")
      .pipe(newer(dir.build))
      .pipe(gulp.dest(dir.build));
  });

// run all tasks
gulp.task('build', gulp.parallel('copy')); // add more tasks here

// Browsersync options
const syncOpts = {
  proxy       : 'localhost',
  files       : dir.build + '**/*',
  open        : false,
  notify      : false,
  ghostMode   : false,
  ui: {
    port: 8001
  }
};

// browser-sync
gulp.task('browsersync', () => {
    if (browsersync === false) {
        browsersync = require('browser-sync').create();
        browsersync.init(syncOpts);
    }
});

// watch for file changes
gulp.task('watch', gulp.parallel('browsersync', () => {

    // page changes
    gulp.watch(dir.src, gulp.series('build')); 
  
}));
  
// default task
gulp.task('default', gulp.series('build', 'watch'));

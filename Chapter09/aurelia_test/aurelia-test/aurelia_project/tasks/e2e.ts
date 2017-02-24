/**
 * e2e task
 * 
 * You should have the server up and running before executing this task. e.g. run `au run`, otherwise the
 * protractor calls will fail.
 */
import * as project from '../aurelia.json';
import * as gulp from 'gulp';
import * as del from 'del';
import * as typescript from 'gulp-typescript';
import * as tsConfig from '../../tsconfig.json';
import {CLIOptions} from 'aurelia-cli';
 
import { webdriver_update, protractor } from 'gulp-protractor';
 
function clean() {
  return del(project.e2eTestRunner.dist + '*');
}
 
function build() {
  var typescriptCompiler = typescriptCompiler || null;
  if ( !typescriptCompiler ) {
    delete tsConfig.compilerOptions.lib;
    typescriptCompiler = typescript.createProject(Object.assign({}, tsConfig.compilerOptions, {
      // Add any special overrides for the compiler here
      module: 'commonjs'
    }));
     
  }
 
  return gulp.src(project.e2eTestRunner.typingsSource.concat(project.e2eTestRunner.source))
    .pipe(typescript(typescriptCompiler))
    .pipe(gulp.dest(project.e2eTestRunner.dist));
}
 
// runs build-e2e task
// then runs end to end tasks
// using Protractor: http://angular.github.io/protractor/
function e2e() {
 
  return gulp.src(project.e2eTestRunner.dist + '**/*.js')
    .pipe(protractor({
      configFile: 'protractor.conf.js',
      args: ['--baseUrl', 'http://127.0.0.1:9000']
    }))
    .on('end', function() { process.exit(); })
    .on('error', function(e) { throw e; });
}
 
export default gulp.series(
  webdriver_update,
  clean,
  build,
  e2e
);
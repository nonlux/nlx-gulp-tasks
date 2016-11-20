import browserSyncFactory from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import stripAnsi from 'strip-ansi';
import path from 'path';

export default function browserSync(config = {}) {
  const { PWD } = process.env;
  const webpackConfig = require(path.join(PWD, 'webpack.config.js'));
  const bundler = webpack(webpackConfig);
  const browserSync = browserSyncFactory.create();
  bundler.plugin('done', function (stats) {
    if (stats.hasErrors() || stats.hasWarnings()) {
      return browserSync.sockets.emit('fullscreen:message', {
        title: "Webpack Error:",
        body:  stripAnsi(stats.toString()),
        timeout: 100000
      });
    }
    browserSync.reload();
  });

  const defaultConfig =  {
    server: { baseDir: './dist'},
    files: [
      './dist/**.html',
      './dist/**.css',
    ],
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {colors: true}
      }),
      webpackHotMiddleware(bundler),
    ],
  };

  browserSync.init({
    ...defaultConfig,
    ...config,
  });
};

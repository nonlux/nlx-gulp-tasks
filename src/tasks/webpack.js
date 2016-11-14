import webpack from 'webpack';
import path from 'path';

const { PWD } = process.env;
const config = require(path.join(PWD, 'webpack.config.js'));
export default function webpackBuild() {
  return new Promise((resolve, reject) => {
    webpack(
      config,
     (err, stats) => {
       if(err) reject(err);
       console.log("[webpack]", stats.toString({}));
        resolve();
    });
  });
}

    

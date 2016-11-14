import browserSyncFactory from 'browser-sync';
export default function browserSync(config = {}) {
  const distPath = ['./dist'];
  const defaultConfig =  {
    server: distPath,
    files: distPath,
  };

  browserSyncFactory.create().init({
    ...defaultConfig,
    ...config,
  });
};


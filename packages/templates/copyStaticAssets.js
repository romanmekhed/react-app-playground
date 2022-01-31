const fs = require('fs-extra');

try {
  fs.copySync(
    'src/public/globalAssets/images',
    'dist/public/resources/globalAssets/images'
  );

  fs.readdirSync('src/public/pages').forEach((page) => {
    const pathToResources = `src/public/pages/${page}`;

    if (fs.lstatSync(pathToResources).isDirectory()) {
      fs.copySync(
        `${pathToResources}/manifest.json`,
        `dist/public/manifests/${page}/manifest.json`
      );
    }
  });

  fs.readdirSync('src/public/pages').forEach((page) => {
    const pathToResources = `src/public/pages/${page}`;

    if (
      fs.existsSync(`${pathToResources}/resources`) &&
      fs.readdirSync(`${pathToResources}/resources`).length !== 0 &&
      fs.lstatSync(pathToResources).isDirectory()
    ) {
      fs.copySync(
        `${pathToResources}/resources`,
        `dist/public/resources/${page}/`
      );
    }
  });

  console.log('######## static assets copy: OK ########');
} catch (err) {
  console.error('######## static assets copy: ERROR ########', err.message);
}

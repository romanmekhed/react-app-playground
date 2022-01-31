const fs = require('fs');

const editManifests = () => {
  fs.readdirSync('src/public/pages').forEach((page) => {
    const pathToResources = `src/public/pages/${page}`;

    if (fs.lstatSync(pathToResources).isDirectory()) {
      const rawManifest = fs.readFileSync(`${pathToResources}/manifest.json`);
      const manifest = JSON.parse(rawManifest);

      if (manifest.features.includes('no_redirect_brand')) {
        manifest.features = manifest.features.filter(
          (arr) => arr !== 'no_redirect_brand'
        );

        fs.writeFileSync(
          `${pathToResources}/manifest.json`,
          JSON.stringify(manifest, null, 2)
        );
      }
    }
  });
};

editManifests();

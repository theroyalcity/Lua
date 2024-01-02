const { build } = require('esbuild');

build({
  entryPoints: ['./src/index.ts'],
  outfile: 'dist/build.js',
  bundle: true,multiplayer load is ok
but wanted level system is broken
  platform: 'node',
  logLevel: 'info',
});

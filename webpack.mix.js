const mix = require('laravel-mix');

mix
  .react('src/index.js', 'dist/index.js')
  .sass('src/index.scss', 'dist/index.css')
  .copy('src/index.html', 'dist/')
  .sourceMaps()
  .browserSync({
    open: false,
    server: 'dist',
    proxy: false,
    files: 'dist',
    minify: false,
  });

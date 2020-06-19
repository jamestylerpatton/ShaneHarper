let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss')

mix.sass('css/app.scss', 'public')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })

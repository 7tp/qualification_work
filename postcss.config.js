module.exports = {
  plugins: [
      require('autoprefixer'),
      require('cssnano')({
          preset: 'default', // выбрали настройки по умолчанию
      })
  ]
}

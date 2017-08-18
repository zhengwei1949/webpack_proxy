module.exports = {
  entry: {
    app: './app/main.js',
  },
  output: {
    path: 'public/',
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: 'public/',
    port: 9000,
    proxy: {
      '/test': {
        target: 'http://127.0.0.1:3000',
        secure: false
      },
    },
  },
};
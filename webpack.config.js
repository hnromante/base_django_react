 var path = require('path');
 console.log(path.resolve(__dirname, 'static/js'))
 module.exports = {
   entry: './src/main.ts',
   resolve: {
     extensions: ['.webpack.js', '.web.js', '.ts', '.js']
   },
   module: {
     rules: [
       { test: /\.ts$/, loader: 'ts-loader' }
     ]
   },
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'static/js')
   }
 }


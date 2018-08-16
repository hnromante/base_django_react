 /*
 var path = require('path');
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
*/
 var path = require('path');
 module.exports = {
   entry: './src/index.tsx',
   module: {
     rules: [
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_module/ }
     ]
   },
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'static/js')
   },
   devtool: 'source-map',
   watch: true,
   resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  }
}


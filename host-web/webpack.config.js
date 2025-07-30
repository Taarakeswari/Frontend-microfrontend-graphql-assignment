// host-web/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: { port: 3000, historyApiFallback: true },
  output: { publicPath: 'auto' },
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'],
  alias: {
    'react-native$': 'react-native-web' // 👈 this is the key fix
  } 
},
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: { mfe1: 'mfe1@http://localhost:3001/remoteEntry.js', mfe2: 'mfe2@http://localhost:3002/remoteEntry.js' },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
        'react-native-web': { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};

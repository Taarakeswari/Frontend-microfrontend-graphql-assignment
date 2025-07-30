// mfe1/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  entry: './src/AccountOverviewApp.tsx',
  devServer: { port: 3001 },
  output: { publicPath: 'auto' },
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], alias: {
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
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: { './AccountOverviewApp': './src/AccountOverviewApp' 
      },
      remotes: {
        mfe2: 'mfe2@http://localhost:3002/remoteEntry.js', // 👈 must match what's hosted by MF2
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};

const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');
const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        rootMode: 'upward',
      },
    },
  ],
  type: 'javascript/auto',
};

const svg = {
  test: /\.svg$/,
  use: [
    '@svgr/webpack',
    {
      loader: 'babel-loader',
    },
    {
      loader: 'react-svg-loader',
      options: {
        jsx: true,
      },
    },
  ],
};

const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  entry: {
    server: path.resolve(__dirname, 'src', 'server.js'),
  },
  module: {
    rules: [js, svg],
  },
  plugins: [
    new LoadablePlugin(),
    new DefinePlugin({
      'process.env.__isBrowser__': 'false',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, 'src', 'public', 'helpers'),
      hooks: path.resolve(__dirname, 'src', 'public', 'hooks'),
      app$: path.resolve(__dirname, 'src', 'public', 'pages', 'app.js'),
    },
  },
};

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    main: path.resolve(__dirname, 'src', 'public', 'main.js'),
  },
  module: {
    rules: [js, svg],
  },
  plugins: [
    new LoadablePlugin(),
    new DefinePlugin({
      'process.env.__isBrowser__': 'true',
      'process.env.ENV': 'development',
    }),
    new WebpackShellPluginNext({
      onDoneWatch: {
        //scripts: ['node copyStaticAssets.js'],
        blocking: false,
        parallel: false,
      },
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist', 'public'),
    filename: '[name].[contenthash].js',
    sourceMapFilename: '[name].js.map',
    publicPath: '/static/',
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        reactDom: {
          test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
          name: 'reactDom',
        },
        libphonenumber: {
          test: /[\\/]node_modules[\\/](libphonenumber-js)[\\/]/,
          name: 'libphonenumber',
        },
        sentry: {
          test: /[\\/]node_modules[\\/](@sentry)[\\/]/,
          name: 'sentry',
        },
      },
    },
  },
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, 'src', 'public', 'helpers'),
      hooks: path.resolve(__dirname, 'src', 'public', 'hooks'),
      app$: path.resolve(__dirname, 'src', 'public', 'pages', 'app.js'),
    },
  },
};

module.exports = [serverConfig, clientConfig];

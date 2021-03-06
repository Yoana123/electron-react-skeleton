/**
 * Webpack base configuration
 */
'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  /**
   * @see https://webpack.js.org/configuration/output
   */
  output: {
    /**
     * This option determines the name of each output bundle.
     *
     * @see https://webpack.js.org/configuration/output/#output-filename
     */
    filename: '[name].js',

    /**
     * The output directory as an absolute path.
     *
     * @see https://webpack.js.org/configuration/output/#output-path
     */
    path: path.resolve(__dirname, '..', 'build'),

    /**
     * Configure how the library will be exposed.
     *
     * @see https://webpack.js.org/configuration/output/#output-librarytarget
     */
    libraryTarget: 'commonjs2',
  },

  /**
   * Configure how modules are resolved.
   *
   * @see https://webpack.js.org/configuration/resolve/#resolve
   */
  resolve: {
    /**
     * Automatically resolve certain extensions.
     *
     * @see https://webpack.js.org/configuration/resolve/#resolve-extensions
     */
    extensions: ['.ts', '.tsx', '.js'],
  },

  /**
   * These options determine how the different types of modules within a project will be treated.
   *
   * @see https://webpack.js.org/configuration/module
   */
  module: {
    /**
     * An array of Rules which are matched to requests when modules are created.
     *
     * @see https://webpack.js.org/configuration/module/#module-rules
     */
    rules: [
      /**
       * Typescript loader
       *
       * @see https://github.com/s-panferov/awesome-typescript-loader
       */
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '..', 'app', 'src'),
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useCache: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },

  /**
   * A list of webpack plugins.
   *
   * @see https://webpack.js.org/configuration/plugins/#plugins
   */
  plugins: [
    /**
     * Skip the emitting phase whenever there are errors while compiling.
     *
     * @see https://webpack.js.org/plugins/no-emit-on-errors-plugin
     */
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  /**
   * The externals configuration option provides a way of excluding
   * dependencies from the output bundles.
   *
   * @see https://webpack.js.org/configuration/externals/#externals
   */
  externals: [
    /**
     * electron-devtools-installer: 7zip
     */
    '7zip',
  ],

  /**
   * This is an object where each property is the name of a Node global or module.
   *
   * @see https://webpack.js.org/configuration/node/#node
   */
  node: {
    __dirname: false,
    __filename: false,
  },
}

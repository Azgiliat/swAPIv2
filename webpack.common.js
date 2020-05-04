const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require(`path`);

module.exports = {
  entry: {
    main: ['./src/index.js'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.[^.]+$/,
        loader: 'url-loader',
        include: [
          path.resolve(__dirname, 'src/static')
        ],
        options: {
          limit: 1000,
          esModule: false,
          publicPath: 'static',
          outputPath: './static',
          //name: '[path][name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, 'src/assets/icons')
        ],
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  cleanupIDs: {
                    minify: false
                  }
                },
                {
                  removeViewBox: false
                },
                {
                  removeAttributesBySelector: {
                    selectors: [
                      {
                        selector: ["svg"],
                        attributes: ['width', 'height']
                      },
                      {
                        selector: ["svg:not(.goodFill) *"],
                        attributes: ['fill']
                      },
                      {
                        selector: ["svg:not(.goodFill)"],
                        attributes: ['fill']
                      }
                    ]
                  }
                }]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      'st': path.join(__dirname, 'src/static')
    }
  },
  output: {
    filename: `[name].js`,
    path: path.join(__dirname, `docs`),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/static/r2-d2-fav.png'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
};

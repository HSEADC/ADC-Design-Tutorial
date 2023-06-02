const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    composition: './src/composition.jsx',
    balance: './src/balance.jsx',
    contrast: './src/contrast.jsx',
    baseSummary: './src/baseSummary.jsx',
    colorSummary: './src/colorSummary.jsx',
    typography: './src/typography.jsx',
    typographySummary: './src/typographySummary.jsx',
    colorSelection: './src/colorSelection.jsx',
    colorChoice: './src/colorChoice.jsx',
    circle: './src/circle.jsx',
    attention: './src/attention.jsx'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // Article
    new HtmlWebpackPlugin({
      template: './src/basics/composition.html',
      filename: './basics/composition.html',
      chunks: ['composition']
    }),

    new HtmlWebpackPlugin({
      template: './src/basics/balance.html',
      filename: './basics/balance.html',
      chunks: ['balance']
    }),

    new HtmlWebpackPlugin({
      template: './src/basics/construction.html',
      filename: './basics/construction.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/basics/contrast.html',
      filename: './basics/contrast.html',
      chunks: ['contrast']
    }),

    new HtmlWebpackPlugin({
      template: './src/basics/attention.html',
      filename: './basics/attention.html',
      chunks: ['attention']
    }),

    new HtmlWebpackPlugin({
      template: './src/basics/base-summary.html',
      filename: './basics/base-summary.html',
      chunks: ['baseSummary']
    }),

    new HtmlWebpackPlugin({
      template: './src/color/circle.html',
      filename: './color/circle.html',
      chunks: ['circle']
    }),

    new HtmlWebpackPlugin({
      template: './src/color/choice.html',
      filename: './color/choice.html',
      chunks: ['colorChoice']
    }),

    new HtmlWebpackPlugin({
      template: './src/color/selection.html',
      filename: './color/selection.html',
      chunks: ['colorSelection']
    }),

    new HtmlWebpackPlugin({
      template: './src/color/color-summary.html',
      filename: './color/color-summary.html',
      chunks: ['colorSummary']
    }),

    new HtmlWebpackPlugin({
      template: './src/typography/base.html',
      filename: './typography/base.html',
      chunks: ['typography']
    }),
    new HtmlWebpackPlugin({
      template: './src/typography/harmony.html',
      filename: './typography/harmony.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/typography/rules.html',
      filename: './typography/rules.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/typography/typography-summary.html',
      filename: './typography/typography-summary.html',
      chunks: ['typographySummary']
    }),

    new HtmlWebpackPlugin({
      template: './src/grid/base.html',
      filename: './grid/base.html'
      // chunks: ['typographySummary']
    }),

    new HtmlWebpackPlugin({
      template: './src/grid/usage.html',
      filename: './grid/usage.html'
      // chunks: ['typographySummary']
    }),

    new HtmlWebpackPlugin({
      template: './src/grid/gridSummary.html',
      filename: './grid/gridSummary.html'
      // chunks: ['typographySummary']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}

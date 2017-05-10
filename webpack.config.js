require('babel-polyfill');
const webpack = require('webpack');

module.exports = [
    {
        entry: './src/js/app.js',
        output: {
            path: __dirname + '/bin/js',
            filename: 'app.bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.json?$/,
                    loader: 'json-loader',
                },
                {
                    test: /\.scss$/,
                    loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
                }
            ]
        },
        postcss: [
          require('postcss-custom-properties')(),
          require('postcss-nesting')()
        ],
        resolve: {
            extensions: ['*', '.js', '.jsx', '.json']
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
                output: {
                    comments: false,
                },
            }),
        ]
    }
];

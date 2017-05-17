import webpack from 'webpack'

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
                    loader: 'babel-loader'
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.json?$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
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

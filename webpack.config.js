const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [        
        path.join(__dirname, 'src', 'index')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: true
        })
    ],
  
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            use: [{
                loader: 'babel-loader'
            }],            
            
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },

    
   
    performance: {
        hints: false
    }, 
    optimization: {
        minimize: false
    }
}

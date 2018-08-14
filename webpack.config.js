const config = {
    entry: './index.js', // entry point
    output: {
        filename: './public/index.js', // place where bundled app will be served
    },
    devServer: {
        contentBase: ['./public/', './src/'],
        inline: true, // autorefresh
        port: 8080 // development port server
    },
    module: {
        rules: [{
            test: /\.jsx?$/, // search for js files 
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'] // use es2015 and react
            }
        }]
    }
}

module.exports = config;
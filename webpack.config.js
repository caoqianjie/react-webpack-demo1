var path = require('path');
module.exports = {
    entry: path.resolve(__dirname,'app/component/app.js'),
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: './build',
        port: '9090',
        colors: true,
        inline: true
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude:/node_modules/,
                loader:"babel"
            },
            {
                test: /(\.png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};

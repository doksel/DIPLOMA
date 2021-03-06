var path = require('path');
 
module.exports = {
    entry: "./app/app.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {
        historyApiFallback: true,
      },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        // loaders: [
        //     {
        //         test: /\.js$/,
        //         loader: "babel",
        //         exclude: [/node_modules/]
        //     },
        //     {
        //         test: /\.css$/,
        //         loader: "style-loader!css-loader!autoprefixer-loader",
        //         exclude: [/node_modules/, /public/]
        //     },
        //     {
        //         test: /\.less$/,
        //         loader: "style-loader!css-loader!autoprefixer-loader!less",
        //         exclude: [/node_modules/, /public/]
        //     },
        //     {
        //         test: /\.gif$/,
        //         loader: "url-loader?limit=10000&mimetype=image/gif"
        //     },
        //     {
        //         test: /\.jpg$/,
        //         loader: "url-loader?limit=10000&mimetype=image/jpg"
        //     },
        //     {
        //         test: /\.png$/,
        //         loader: "url-loader?limit=10000&mimetype=image/png"
        //     },
        //     {
        //         test: /\.svg/,
        //         loader: "url-loader?limit=26000&mimetype=image/svg+xml"
        //     },
        //     {
        //         test: /\.jsx$/,
        //         loader: "babel-loader",
        //         exclude: [/node_modules/, /public/]
        //     },
        //     {
        //         test: /\.json$/,
        //         loader: "json-loader"
        //     }
        // ],
        rules:[ {  //загрузчик для jsx
                test: /\.jsx$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/]
            },
            // {
            //     test: /\.js$/,
            //     enforce: "pre",
            //     loader: "eslint-loader",
            //     exclude: [/node_modules/]
            // },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use:[
                    "style-loader",  
                    "css-loader",
                    "less-loader"
                ]
            }]
    }
}
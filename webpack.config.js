const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    entry : './src/index.js',
    output : {
               path : path.resolve(__dirname,'dist'),
               filename : 'index_bundle.js'
            },
            module :{
                rules :[ 
                       { test : /\.(js)$/,use : 'babel-loader'},
                       { test : /\.(css)$/,use:['style-loader','css-loader']},
                       {
                        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                        loader: 'url-loader?limit=100000' 
                       },
                       
                    ]
              },
              mode : 'production',
plugins :[
  new HtmlWebpackPlugin({
     template : 'src/index.html'
    })
],
// watch: true
 }
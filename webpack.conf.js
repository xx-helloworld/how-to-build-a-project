const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.vue', '.vuex']
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader',
              options: {
                loaders: {
                  ts: 'ts-loader',
                  tsx: 'babel-loader!ts-loader',
                }
              }
            },
            { test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/TS\.vue$/] } },
            { test: /\.tsx$/, loader: 'babel-loader!ts-loader', options: { appendTsxSuffixTo: [/TSX\.vue$/] } }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
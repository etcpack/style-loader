module.exports = {

    // 打包入口
    entry: './src/main.js',

    // 打包出口
    output: 'build/main.js',

    redirect: {},

    loader: [{
        test: /\.css$/,
        handler: ['../src/index.js']
    }]
};

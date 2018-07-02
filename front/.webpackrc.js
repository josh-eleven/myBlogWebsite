const path = require('path');

export default {
    entry: 'src/index.js',
    extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
    html: {
        template: './src/index.ejs',
    },
    env: {
        development: {
            publicPath: '/',
        },
    },
    publicPath: '/public',
    hash: true,
};
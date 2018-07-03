const path = require('path');

export default {
    entry: 'src/index.js',
    extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
    html: {
        template: './src/index.ejs',
    },
    alias: {
        components: path.resolve(__dirname, 'src/components/'),
    },
    env: {
        development: {
            publicPath: '/',
        },
    },
    theme: './src/theme.js',
    publicPath: '/public/',
    hash: true,
};
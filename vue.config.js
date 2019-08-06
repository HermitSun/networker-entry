const path = require('path');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 生产环境部署的路径
const BASE_URL = process.env.NODE_ENV === 'production' ?
  '/networker' :
  '/';

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'networker',
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启生产环境的 source map
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('enums', resolve('src/enums'))
      .set('utils', resolve('src/utils'))
      .set('types', resolve('src/types'))
      .set('plugins', resolve('src/plugins'))
      .set('views', resolve('src/views'));
    config.resolve.extensions
      .add('*', '.js', '.json', '.vue', '.ts', '.tsx');
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~assets/scss/main.scss"`
      }
    }
  },
  devServer: {
    https: false,
    open: true, // 自动启动浏览器
    port: 8085
  }
};

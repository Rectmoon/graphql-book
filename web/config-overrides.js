const path = require('path')
const { override, addWebpackAlias, addBabelPlugins } = require('customize-cra')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': resolve('src')
    }),
    addBabelPlugins(['react-loadable/babel'])
  ),

  paths: paths => {
    paths.appBuild = path.resolve(__dirname, '../server/public')
    paths.servedPath = '/public/'
    return paths
  }
}

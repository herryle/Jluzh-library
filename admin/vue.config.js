/*
 * @Author: qbenben 
 * @Date: 2019-07-14 00:43:09 
 * @Last Modified by: qbenben
 * @Last Modified time: 2019-07-14 00:49:25
 * 打包后生成的静态文件目标路径文件夹和路径
 */
module.exports = {
  outputDir: __dirname + '/../server/admin',
  publicPath: process.env.NODE_ENV === 'production' ?
    '/admin/' : '/'
}
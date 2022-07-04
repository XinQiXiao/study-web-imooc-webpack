/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-05-16 17:32:05
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-05-16 17:35:41
 * @FilePath: /imooc-webpack/2Webpack初探/demo/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
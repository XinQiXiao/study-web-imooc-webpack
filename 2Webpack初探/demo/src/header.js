/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-05-16 17:17:52
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-05-16 17:40:00
 * @FilePath: /imooc-webpack/2Webpack初探/demo/header.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function Header(){
    var dom = document.getElementById('root');
    console.log('Header dom=>', dom)
    var header = document.createElement('div');
    console.log('Header header=>', header)
    header.innerText = 'header';
    dom.append(header);
}

module.exports = Header;
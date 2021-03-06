/**
 * @module 配置package.json的参数和webpack.config的参数。
 * 
 */
module.exports = {
    libraryName: '@alanchenchen/gittask', // npm包名，首字母不允许大写，支持驼峰和短杆写法
    bundleName: 'gitTask', // 打包后文件名，也是UMD script直接引入挂在windows对象的key名
    version: '0.0.6', // 版本号
    description: 'A plugin CLI to task your git operations ', // 包描述
    keywords: ['git', 'task', 'wrokflow', 'CLI'], // 关键词
    author: 'Alan Chen', // 作者
    email: "739709491@qq.com", // 用于bug反馈的邮箱
    repository: { // 仓库地址和首页地址
        type: 'git',
        url: 'https://github.com/alanchenchen/GitTask'
    }
}
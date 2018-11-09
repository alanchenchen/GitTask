const chalk = require('chalk')
const { git, shell } = require('../utils')

module.exports = async () => {
    let gitVersion = await shell(git.checkVersion)
    gitVersion = gitVersion.split(' ')[2]
    if(gitVersion) {
        console.log(chalk.green(`当前git版本是 ${gitVersion}`))
    }
    else {
        console.log(chalk.red(`你当前环境没有安装git，请先安装git`))
    }
}
const { git, shell } = require('../utils')
const chalk = require('chalk')

module.exports = async () => {
    const branchList = await shell(git.showStatus)
    console.log(chalk`{blue 当前git的缓存状态：}\n${branchList}`)
}
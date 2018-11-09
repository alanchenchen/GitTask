const { git, shell } = require('../utils')
const chalk = require('chalk')

module.exports = async () => {
    const branchList = await shell(git.showBranch)
    console.log(chalk`{blue 当前git的分支：}\n${branchList}`)
}
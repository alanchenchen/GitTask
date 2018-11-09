const chalk = require('chalk')
const inquirer = require('inquirer')
const { git, shell } = require('../utils')

module.exports =  async () => {
    const res = await shell(git.showBranch)
    const branchList = res.split('\n').map(a => a.slice(1).trim()).filter(b => Boolean(b))

    const { nBranch } = await inquirer.prompt([
        {
            type: 'list',
            name: 'nBranch',
            message: chalk.yellow('选择切换至的分支名：'),
            choices: branchList
        }
    ])
    
    await shell(git.checkoutBranch, [`${nBranch}`])
}
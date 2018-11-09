const chalk = require('chalk')
const inquirer = require('inquirer')
const { git, shell } = require('../utils')

module.exports =  async () => {
    const res = await shell(git.showBranch)
    const branchList = res.split('\n').map(a => a.slice(1).trim()).filter(b => !b.includes('remotes/origin') && Boolean(b))

    const { rmBranch } = await inquirer.prompt([
        {
            type: 'list',
            name: 'rmBranch',
            message: chalk.yellow('选择需要删除的本地分支名：'),
            choices: branchList
        }
    ])

    await shell(git.deleteBranch, [`${rmBranch}`])
}
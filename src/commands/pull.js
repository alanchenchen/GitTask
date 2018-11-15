const ora = require('ora')
const chalk = require('chalk')
const inquirer = require('inquirer')
const { git, shell } = require('../utils')

module.exports = async () => {
    const res = await shell(git.showBranch)
    const branchList = res.split('\n').map(a => a.slice(1).trim()).filter(b => Boolean(b))

    const { nBranch } = await inquirer.prompt([
        {
            type: 'list',
            name: 'nBranch',
            message: chalk.yellow('选择需要拉取到本地更新的分支名：'),
            choices: branchList
        }
    ])
    
    const spinner = ora('拉取远程仓库分支到本地...')
    spinner.start()

    if(Boolean(branch)) {
        await shell(git.pull, [`${nBranch}`])
    }

    spinner.succeed() 
    return nBranch
}
const chalk = require('chalk')
const ora = require('ora')
const inquirer = require('inquirer')
const { git, shell } = require('../utils')

module.exports =  async () => {
    const res = await shell(git.showBranch)
    const branchList = res.split('\n').filter(a => a.includes('remotes/origin')).map(b => b.split('/')[2])
    
    const { rmBranch } = await inquirer.prompt([
        {
            type: 'list',
            name: 'rmBranch',
            message: chalk.yellow('选择需要删除的远程仓库分支名：'),
            choices: branchList
        }
    ])

    const spinner = ora('删除远程仓库...')
    spinner.start()
    await shell(git.deleteOrigin, [`${rmBranch}`]) 
    spinner.succeed()
}
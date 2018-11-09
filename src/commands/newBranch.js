const chalk = require('chalk')
const inquirer = require('inquirer')
const { git, shell } = require('../utils')

module.exports =  async () => {
    const { nBranch } = await inquirer.prompt([
        {
            name: 'nBranch',
            message: chalk.yellow('输入新建的分支名：'),
            validate(value) {
                if(value) {
                    return true
                }
                return '值不能为空'
            }
        }
    ])

    if(nBranch) {
        await shell(git.newBranch, [`${nBranch}`])
    }
}
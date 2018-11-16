const chalk = require('chalk')
const inquirer = require('inquirer')
const { git, shell } = require('../utils')

module.exports =  async () => {
    let firstB
    const { oBranch, nBranch } = await inquirer.prompt([
        {
            name: 'oBranch',
            message: chalk.yellow('输入旧分支名：'),
            validate(value) {
                if(!Boolean(value)) {
                    return '值不能为空'
                }
                else {
                    firstB = value
                    return true
                }
            }
        },
        {
            name: 'nBranch',
            message: chalk.yellow('输入新分支名：'),
            validate(value) {
                if(!Boolean(value)) {
                    return '值不能为空'
                }
                else if(Boolean(value) && firstB == value) {
                    return '不能输入重复的值'
                }
                else {
                    return true
                }
            }
        }
    ])

    if(nBranch) {
        await shell(git.modifyBranch, [`${oBranch}`, `${nBranch}`])
        return nBranch
    }
}
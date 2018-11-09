const chalk = require('chalk')
const inquirer = require('inquirer')
const { git, shell } = require('../utils')

module.exports =  async () => {
    let firstV = ''
    const { oBranch, nBranch } = await inquirer.prompt([
        {
            name: 'oBranch',
            message: chalk.yellow('输入旧分支名：'),
            validate(value) {
                if(value) {
                    firstV = value
                }
                return true
            }
        },
        {
            name: 'nBranch',
            message: chalk.yellow('输入新分支名：'),
            validate(value) {
                if(firstV) {
                    if(!Boolean(value)) {
                        return '值不能为空'
                    }
                    else if(Boolean(value) && firstV == value) {
                        return '不能输入重复的值'
                    }
                    else {
                        return true
                    }
                }
                else {
                    if(Boolean(value)) {
                        return '没有旧分支，无法修改'
                    }
                    else {
                        return true
                    }
                }
            }
        }
    ])

    if(nBranch) {
        await shell(git.modifyBranch, [`${oBranch}`, `${nBranch}`])
        return nBranch
    }
}
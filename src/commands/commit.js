const chalk = require('chalk')
const inquirer = require('inquirer')
const { git, shell } = require('../utils')

module.exports = async (branch) => {
    const { commit } = await inquirer.prompt([
        {
            name: 'commit',
            message: chalk.yellow('输入commit的内容'),
            validate(value) {
                if(value) {
                    val = value
                    return true
                }
                else {
                    return '值不能为空'
                }
            }
        }
    ])
    if(commit) {
        await shell(git.commitFile, [`${commit}`])
        return branch
    }
}
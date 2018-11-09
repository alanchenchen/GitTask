const chalk = require('chalk')
const ora = require('ora')
const { git, shell } = require('../utils')

module.exports = async (branch) => {
    const spinner = ora('git缓存修改过的文件...')
    spinner.start()
    await shell(git.addModifiedFile)
    spinner.succeed() 
    return branch
} 
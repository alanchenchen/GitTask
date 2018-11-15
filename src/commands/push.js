const ora = require('ora')
const { git, shell } = require('../utils')

module.exports = async (branch) => {
    const spinner = ora('提交到远程仓库...')
    spinner.start()

    if(Boolean(branch)) {
        await shell(git.push, [`${branch}`])
    }
    else {
        await shell(['push']) 
    }
    
    spinner.succeed() 
}
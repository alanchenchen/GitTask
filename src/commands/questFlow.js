const inquirer = require('inquirer')
const chalk = require('chalk')

module.exports = async (param) => {
    const { orderFlow } = await inquirer.prompt([
        {
            type: 'list',
            name: 'orderFlow',
            message: chalk.green('是否按照项目正常git流来一步步提交git？'),
            choices: [
                {name: '是', value: true, short: '按照引导操作'}, 
                {name: '否', value: false, short: '自己输入git命令'}
            ]
        }
    ])
    if(orderFlow) {
        return 
    }
    else {
        process.exit(0)
    }
}
const { git, shell } = require('./utils')
const checkVersion = require('./commands/checkVersion')

const WorkFlow = {
    lastParam : null,
    async use(task) {
        await checkVersion()
        for(let i=0; i<=task.length-1; i++) {
            this.lastParam = await task[i](this.lastParam)
        }
    }
}

module.exports = {
    WorkFlow,
    git,
    shell
}
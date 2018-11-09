const { WorkFlow } = require('../src/index')
const questFlow = require('../src/commands/questFlow')
const showBranch = require('../src/commands/showBranch')
const modifyOldBranch = require('../src/commands/modifyOldBranch') 
const addModifiedFile = require('../src/commands/addModifiedFile') 
const commit = require('../src/commands/commit') 
const push = require('../src/commands/push') 
const deleteOrigin = require('../src/commands/deleteOrigin')

/* 插件内置13个常用的命令扩展，先引入，然后自由组合，task内会按照索引顺序依次执行 */
const task = [showBranch, questFlow, modifyOldBranch, addModifiedFile, commit, push, deleteOrigin]
WorkFlow.use(task)
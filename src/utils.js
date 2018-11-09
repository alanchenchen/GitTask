const { execFile } = require('child_process')

/**
 * @constant GITCMD git启动的路径
 * @constant git git的常用命令
 * 
 */
const GITCMD = 'git'
const git = { 
    checkVersion: ['version'],
    addModifiedFile: ['add', '.'],
    showStatus: ['status'],
    showLog: ['log'],
    showDiff: ['diff'],
    showBranch: ['branch', '-a'],
    newBranch: ['branch'],
    modifyBranch: ['branch', '-m'],
    checkoutBranch: ['checkout'],
    deleteBranch: ['branch', '-d'],
    commitFile: ['commit', '-m'],
    push: ['push', 'origin'],
    deleteOrigin: ['push', 'origin', '--delete']
}

/**
 * @function shell
 * @description 调用git命令子进程
 * @param {*} cmd git对应的默认命令参数数组
 * @param {*} params 添加在git命令原本参数后的参数，默认为空数组
 * @param {*} prefixPath 命令的路径，默认为'git'
 * @returns Promise
 */
const shell = (cmd, params=[], prefixPath = GITCMD) => {
    const args = [...cmd, ...params]
    return new Promise((resolve, reject) => {
        execFile(prefixPath, args, (error, stdout, stderr) => {
            if (error) {
                reject()
                throw error
            }
            resolve(stdout)
        })
    })
}

module.exports = {
    shell,
    git
}
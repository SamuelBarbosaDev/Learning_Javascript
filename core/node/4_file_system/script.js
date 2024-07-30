const fileSystem = require('fs').promises;
const path = require('path');

async function readDir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fileSystem.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for (let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fileSystem.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;
        if (/\.html/g.test(fileFullPath)) continue;

        if (stats.isDirectory()){
            readDir(fileFullPath);
            continue;
        };

        console.log(fileFullPath);
    }
}

readDir('./core/node/');
const shell = require('shelljs');
const fs = require('fs-extra');
const path = require('path');

const frontPath = path.join(__dirname);
const serverPath = path.join(__dirname, '../server');

async function copyDistToServer() {
    try {
        const staticDir = path.join(frontPath, './dist/static');
        const publicDir = path.join(serverPath, './app/public');
        const files = fs.readdirSync(path.join(frontPath, './dist'));
        let jsName = 'index.js';
        let cssName = 'index.css';
        files.forEach((filename) => {
            if (filename.endsWith('.js')) {
                jsName = filename;
            }

            if (filename.endsWith('.css')) {
                cssName = filename;
            }
        });
        const jsPath = path.join(frontPath, `./dist/${jsName}`);
        const cssPath = path.join(frontPath, `./dist/${cssName}`);
        const htmlPath = path.join(frontPath, './dist/index.html');
        const htmlServerPath = path.join(serverPath, './app/view/home/index.tpl');

        // empty dir
        await fs.emptyDir(publicDir);

        // copy resource to public
        await fs.copy(staticDir, `${publicDir}/static`);
        await fs.copy(jsPath, `${publicDir}/${jsName}`);
        await fs.copy(cssPath, `${publicDir}/${cssName}`);
        await fs.copy(htmlPath, htmlServerPath);
    } catch (err) {
        console.error(err);
        return null;
    }
}

function buildFileToServer() {
    // 0. exec local lib bin
    process.env.PATH += (path.delimiter + path.join(__dirname, 'node_modules', '.bin'));

    // 1. build dist
    if (shell.exec('roadhog build').code !== 0) {
        console.error('build dist error! plese check you environment!');
        return null;
    }

    // 2. copy dist to server dir
    copyDistToServer();
}

buildFileToServer();
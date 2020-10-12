// const path = require('path');
// let BUILD_DIR = path.resolve(__dirname, './dist');
// let APP_DIR = path.resolve(__dirname, './src');
// const configDirs = {
//   BUILD_DIR: BUILD_DIR,
//   APP_DIR: APP_DIR
// }

function buildConfig(env) {
    if ( ((env.toLowerCase()) === 'dev') || ((env.toLowerCase()) === 'prod') ) {
        return require('./webpack.' + env + '.config.js')();
    } else {
        console.log("Wrong webpack build parameter. Please pass on env parameter as 'dev' or 'prod'!");
    }
}
module.exports = buildConfig;
// const path = require('path');
// let BUILD_DIR = path.resolve(__dirname, './dist');
// let APP_DIR = path.resolve(__dirname, './src');
// const configDirs = {
//   BUILD_DIR: BUILD_DIR,
//   APP_DIR: APP_DIR
// }

function buildConfig(env) {
    const envName =
      typeof env === 'string'
        ? env
        : env && typeof env === 'object'
          ? (env.dev && 'dev') || (env.prod && 'prod') || env.MODE || env.mode
          : undefined;

    if (envName && (envName.toLowerCase() === 'dev' || envName.toLowerCase() === 'prod')) {
        return require('./webpack.' + envName + '.config.js')();
    }

    console.log("Wrong webpack build parameter. Please pass env as 'dev' or 'prod' (e.g. --env dev).");
}

module.exports = buildConfig;
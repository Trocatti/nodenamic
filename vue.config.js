process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
    // transpile icon font-awesome
    transpileDependencies: [
        /\bvue-awesome\b/
    ]
};

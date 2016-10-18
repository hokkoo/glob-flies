var globFile = require('../index.js');
globFile.aggregate({
    dirname: 'node_modules',
    excludeDirs: /(.npminstall)$/,
    filter  : /(.+)\.(js)$/,
    flattenDirectories: true,
    keepDirectoryPath: true,
    identity  : true,
    force: false,
    dontLoad: true
}, function (err, files) {
    console.log(files.join('\n'));
});
const fs = require('fs')


function getWriteCallback(path) {
    return function(err) {
        if (err) {
            console.log(`Error while writing file`);
            return console.log(err);
        }
        console.log(`File ${path} was successfully written!`);
    }
}

function getReadCallback(path, wrong, correct) {
    return function(err, data) {
        if (err) {
            return console.log(`Error while reading file: ${err}`);
        }
        const correctData = data.replace(wrong, correct);
        fs.writeFile(path, correctData, getWriteCallback(path));
    }
}

function fixFile(path, wrongContent, correctContent) {
    fs.readFile(path, 'utf8', getReadCallback(path, wrongContent, correctContent));
}

exports.default = fixFile;

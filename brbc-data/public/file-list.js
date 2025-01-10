const fs = require('fs');
const path = require('path');

const filesFolder = path.join(__dirname, 'files');
const files = fs.readdirSync(filesFolder).map(file => `/files/${file}`);

fs.writeFileSync('file-list.json', JSON.stringify(files, null, 2));
console.log('File list generated!');

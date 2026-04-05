const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'public', 'images', 'gallery');

// 1. Rename umhanga to umhlanga
const oldUmh = path.join(p, 'umhanga');
const newUmh = path.join(p, 'umhlanga');
if (fs.existsSync(oldUmh) && !fs.existsSync(newUmh)) {
  fs.renameSync(oldUmh, newUmh);
}

// 2. Format umhlanga files to umhlanga-1.jpg... etc
if (fs.existsSync(newUmh)) {
  const umhFiles = fs.readdirSync(newUmh).filter(f => !f.startsWith('.')).sort();
  umhFiles.forEach((f, idx) => {
    fs.renameSync(path.join(newUmh, f), path.join(newUmh, `umhlanga-${idx + 1}.jpg`));
  });
}

// 3. Remove spaces and brackets from ALL other files
const folders = fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());

folders.forEach(folder => {
  const dirPath = path.join(p, folder);
  const files = fs.readdirSync(dirPath).filter(f => !f.startsWith('.'));
  
  files.forEach(file => {
    const newName = file.replace(/[\s()]/g, '-').replace(/-+/g, '-').toLowerCase();
    if (newName !== file) {
      fs.renameSync(path.join(dirPath, file), path.join(dirPath, newName));
    }
  });
});

console.log('Filenames cleaned.');

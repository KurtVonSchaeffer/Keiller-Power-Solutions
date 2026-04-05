const fs = require('fs');
const path = require('path');
const file = 'src/pages/Gallery.jsx';
let content = fs.readFileSync(file, 'utf8');

const galleryPath = path.join(__dirname, 'public', 'images', 'gallery');

const folderMap = {
  'umhanga': 'umhanga',
  'durban': 'durban',
  'chatsworth': 'chatsworth',
  'lanseria': 'lanseria',
  'huwai-edenvale': 'huwai-edenvale',
  'edenvale': 'edenvale',
  'solar-edenvale': 'solar-edenvale',
  'alberton': 'alberton',
  'repairs-to-hail-damage': 'repairs-to-hail-damage',
  'moleta-park': 'moleta-park',
  'morleta-park-2': 'morleta-park-2',
  'commercial-1': 'commercial-1',
  'commercial-2': 'commercial-2',
  'sinergy-comercial': 'sinergy-comercial',
  'commercial-benonie': 'commercial-benonie',
  'solar-commercial': 'solar-commercial',
  'ev-morningside-byd': 'ev-morningside-byd',
  'ev-electric-vehicle-byd': 'ev-electric-vehicle-byd',
  'ev-byd-sealion-7': 'ev-byd-sealion-7',
  'ev-mg-centurion': 'ev-mg-centurion',
  'ev-byd-sealion-6-edenvale': 'ev-byd-sealion-6-edenvale',
  'ev-chery-sandton': 'ev-chery-sandton',
  'ev-charger-chery-randburg': 'ev-charger-chery-randburg',
  'ev-bryanston-jaecoo': 'ev-bryanston-jaecoo',
  'ev-jaecoo-omoda-serengeti': 'ev-jaecoo-omoda-serengeti',
  'ev-omoda-benoni': 'ev-omoda-benoni',
  'byd-dolphin': 'byd-dolphin'
};

const regex = /{\s*id:\s*\d+,[\s\S]*?category:\s*'[^']+',[\s\S]*?location:\s*'[^']+',?(?:\s*type:\s*'[^']+',?)?(?:\s*videoUrl:\s*'[^']+',?)?\s*}/g;

content = content.replace(regex, (match) => {
  const imgMatch = match.match(/image:\s*'\/images\/gallery\/([^/]+)\/[^']+'/);
  if (!imgMatch) return match;
  
  const folder = imgMatch[1];
  const dirPath = path.join(galleryPath, folder);
  
  if (!fs.existsSync(dirPath)) {
    console.log('Folder missing:', folder);
    return match;
  }
  
  const files = fs.readdirSync(dirPath)
    .filter(f => !f.startsWith('.') && /\.(jpg|jpeg|png)$/i.test(f))
    .sort();
    
  if (files.length === 0) {
    console.log('No images in:', folder);
    return match;
  }
  
  // Replace the image string
  let updatedMatch = match.replace(/image:\s*'[^']+'/, `image: '/images/gallery/${folder}/${files[0]}'`);
  
  // Replace the images array
  const imagesArrayStr = 'images: [\n' + files.map(f => `      '/images/gallery/${folder}/${f}'`).join(',\n') + '\n    ]';
  updatedMatch = updatedMatch.replace(/images:\s*\[[\s\S]*?\]/, imagesArrayStr);
  
  return updatedMatch;
});

// Restore the onError handler to original so we can see if images break, and so it doesn't infinite loop. We'll use a local fallback if we want, or nothing.
// The user removed it completely in our last edit. Let's just put it back to logging so we can debug.
// Wait, the DOM was crashing. Let's not add onError back yet.

fs.writeFileSync(file, content);
console.log('Update complete.');

const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
// const stat = util.promisify(fs.stat);

const file =  process.argv[2];

async function parseMdToJson(filePath) {
  try {
    // const stats = await stat(filePath);
    // if(!stats.isFile()) throw new Error(`not a file ${filePath}`);
    const data = await readFile(filePath, 'utf-8');
    const lines = data.split(/\n/);

    const json = {
      glossary: []
    };

    let activeObject = {};
    let activeHeadTitle = '';
    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      if(trimmedLine.startsWith('##')) {
        const category = trimmedLine.slice(2).trim();
        activeObject = {};
        activeObject.words = [];
        activeObject.title = `${category} (${activeHeadTitle})`;
        json.glossary.push(activeObject);
      }
      else if(trimmedLine.startsWith('#')) {
        activeHeadTitle = trimmedLine.slice(1).trim();
        // activeObject.headTitle = activeHeadTitle; 
      }
      else {
        const [ lat = '???', sv = '???' ] = trimmedLine.split(',');
        activeObject.words.push([lat.trim(), sv.trim()]);
      }
    })
    return writeToFile(JSON.stringify(json));
  } catch(err) {
    throw err;
  }  
}

function writeToFile(json) {
  const filename = path.join(__dirname, '..', 'data', 'words.json');
  // const stream = fs.createWriteStream(filename);
  // stream.write(JSON.stringify(json), 'utf8', () => console.log('DONE!'));
  fs.writeFile(filename, json, 'utf8', () => console.log('DONE!'));
}

parseMdToJson(file);



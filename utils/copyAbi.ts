import fs from 'fs';
import {abiList} from "./abiList";

fs.mkdirSync('./abi');

for (const el of abiList) {
  fs.copyFileSync(`./temp/out/${el}.sol/${el}.abi.json`, `./abi/${el}.json`);
}


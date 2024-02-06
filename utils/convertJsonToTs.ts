/// Convert JSON abis to TS
import fs from 'fs';
import {abiList} from "./abiList";

let data: string = '/* Autogenerated file. Do not edit manually. */\n';

for (const el of abiList) {
  const source = `./abi/${el}.json`;
  const target = `./abi/${el}.ts`
  const content = fs.readFileSync(source);

  fs.writeFileSync(target, `export const ${el}__abi = ${content.toString()} as const;`);
  fs.rmSync(source);

  data += `export * from "./${el}";\n`
}

fs.writeFileSync('./abi/index.ts', data);

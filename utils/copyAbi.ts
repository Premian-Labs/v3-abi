import fs from 'fs';

const abiList = [
  "IChainlinkAdapter",
  "IERC20",
  "IERC20Permit",
  "IERC20Router",
  "IERC1155",
  "IERC4626",
  "IExchangeHelper",
  "IFeeConverter",
  "IOptionPS",
  "IOptionPSFactory",
  "IOptionReward",
  "IOptionRewardFactory",
  "IOracleAdapter",
  "IPool",
  "IPoolFactory",
  "IPosition",
  "IPricing",
  "IReferral",
  "ISolidStateDiamond",
  "ISolidStateERC20",
  "ISolidStateERC4626",
  "IUnderwriterVault",
  "IUserSettings",
  "IVault",
  "IVaultMining",
  "IVaultRegistry",
  "IVolatilityOracle",
  "IVxPremia",
  "OrderbookStream"
];

fs.mkdirSync('./abi');

let data: string = '/* Autogenerated file. Do not edit manually. */\n';
data = data + 'import {JsonFragment} from "ethers";\n';

for (const el of abiList) {
  fs.copyFileSync(`./temp/out/${el}.sol/${el}.abi.json`, `./abi/${el}.json`);
  data = data + `import ${el}JSON from './${el}.json';\n`;
}

for (const el of abiList) {
  data = data + `export const ${el} = ${el}JSON as ReadonlyArray<JsonFragment>;\n`;
}

fs.writeFileSync('./abi/index.ts', data);

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
"IOracleAdapter",
"IPool",
"IPoolFactory",
"IPosition",
"IPricing",
"IReferral",
"ISolidStateERC20",
"ISolidStateERC4626",
"IUnderwriterVault",
"IUserSettings",
"IVault",
"IVaultRegistry",
"IVolatilityOracle",
"IVxPremia"
];

for (const dir of ['./abi', './dist', './typechain']) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, {recursive: true});
  }
}

fs.mkdirSync('./abi');

for (const el of abiList) {
  fs.copyFileSync(`./temp/out/${el}.sol/${el}.abi.json`, `./abi/${el}.json`);
}
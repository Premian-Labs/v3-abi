export type Tokens = { [symbol: string]: string };

export interface DeploymentMetadata {
  addresses: {
    treasury: string;
    insuranceFund: string;
    dao: string;
    lzEndpoint: string;
  };
  tokens: Tokens;
  feeConverter: {
    main: ContractDeploymentMetadata;
    insuranceFund: ContractDeploymentMetadata;
    treasury: ContractDeploymentMetadata;
    dao: ContractDeploymentMetadata;
  };
  core: { [key in ContractKey]: ContractDeploymentMetadata };
  dualMining: { [name: string]: ContractDeploymentMetadata };
  optionPS: { [name: string]: ContractDeploymentMetadata };
  optionReward: { [name: string]: ContractDeploymentMetadata };
  vaults: { [name: string]: ContractDeploymentMetadata };
  rewardDistributor: { [name: string]: ContractDeploymentMetadata };
}

export enum ContractKey {
  ChainlinkAdapterImplementation = 'ChainlinkAdapterImplementation',
  ChainlinkAdapterProxy = 'ChainlinkAdapterProxy',
  DualMiningImplementation = 'DualMiningImplementation',
  DualMiningManager = 'DualMiningManager',
  ERC20Router = 'ERC20Router',
  ExchangeHelper = 'ExchangeHelper',
  FeeConverterImplementation = 'FeeConverterImplementation',
  OptionCSBase = 'OptionCSBase',
  OptionCSCore = 'OptionCSCore',
  OptionCSDiamond = 'OptionCSDiamond',
  OptionCSFactoryImplementation = 'OptionCSFactoryImplementation',
  OptionCSFactoryProxy = 'OptionCSFactoryProxy',
  OptionMathExternal = 'OptionMathExternal',
  OptionPSFactoryImplementation = 'OptionPSFactoryImplementation',
  OptionPSFactoryProxy = 'OptionPSFactoryProxy',
  OptionPSImplementation = 'OptionPSImplementation',
  OptionRewardFactoryImplementation = 'OptionRewardFactoryImplementation',
  OptionRewardFactoryProxy = 'OptionRewardFactoryProxy',
  OptionRewardImplementation = 'OptionRewardImplementation',
  OrderbookImplementation = 'OrderbookImplementation',
  OrderbookProxy = 'OrderbookProxy',
  OrderbookStreamImplementation = 'OrderbookStreamImplementation',
  OrderbookStreamProxy = 'OrderbookStreamProxy',
  PaymentSplitterImplementation = 'PaymentSplitterImplementation',
  PaymentSplitterProxy = 'PaymentSplitterProxy',
  ReferralImplementation = 'ReferralImplementation',
  ReferralProxy = 'ReferralProxy',
  UnderwriterVaultExternal = 'UnderwriterVaultExternal',
  UnderwriterVaultImplementation = 'UnderwriterVaultImplementation',
  UserSettingsImplementation = 'UserSettingsImplementation',
  UserSettingsProxy = 'UserSettingsProxy',
  VaultMiningImplementation = 'VaultMiningImplementation',
  VaultMiningProxy = 'VaultMiningProxy',
  VaultRegistryImplementation = 'VaultRegistryImplementation',
  VaultRegistryProxy = 'VaultRegistryProxy',
  VolatilityOracleImplementation = 'VolatilityOracleImplementation',
  VolatilityOracleProxy = 'VolatilityOracleProxy',
  VxPremiaImplementation = 'VxPremiaImplementation',
  VxPremiaProxy = 'VxPremiaProxy',
}

export interface ContractDeploymentMetadata {
  address: string;
  contractType: ContractType | string;
  deploymentArgs: string[];
  commitHash: string;
  txHash: string;
  block: number;
  timestamp: number;
  owner: string;
}

export enum ContractType {
  Standalone = 'Standalone',
  Proxy = 'Proxy',
  Implementation = 'Implementation',
  DiamondProxy = 'DiamondProxy',
  DiamondFacet = 'DiamondFacet',
}

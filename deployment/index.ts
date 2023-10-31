/* Autogenerated file. Do not edit manually. */
import {ContractDeploymentMetadata, DeploymentMetadata} from './types';
import arbitrumMetadata from './arbitrum.json';
import arbitrumGoerliMetadata from './arbitrumGoerli.json';
import arbitrumNovaMetadata from './arbitrumNova.json';
export const arbitrum = arbitrumMetadata as DeploymentMetadata;
export const arbitrumGoerli = arbitrumGoerliMetadata as DeploymentMetadata;
export const arbitrumNova = arbitrumNovaMetadata as { core: { [key: string]: ContractDeploymentMetadata } };
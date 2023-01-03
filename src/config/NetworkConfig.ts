/*
 * (C) Symbol Contributors 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

export interface NodeConfig {
    roles: number;
    friendlyName: string;
    url: string;
}

export interface NetworkConfigurationDefaults {
    maxTransactionsPerAggregate: number;
    maxMosaicDuration: number;
    lockedFundsPerAggregate: string;
    maxNamespaceDuration: number;
    maxCosignatoriesPerAccount: number;
    maxMosaicAtomicUnits: number;
    blockGenerationTargetTime: number;
    currencyMosaicId: string;
    namespaceGracePeriodDuration: number;
    harvestingMosaicId: string;
    minNamespaceDuration: number;
    maxCosignedAccountsPerAccount: number;
    maxNamespaceDepth: number;
    defaultDynamicFeeMultiplier: number;
    maxMosaicDivisibility: number;
    maxMessageSize: number;
    epochAdjustment: number;
    totalChainImportance: number;
    generationHash: string;
}

export interface NetworkConfig {
    faucetUrl: string;
    defaultNetworkType: number;
    explorerUrl: string;
    networkConfigurationDefaults: NetworkConfigurationDefaults;
    statisticServiceUrl: string;
}

export const defaultTestnetNetworkConfig: NetworkConfig = {
    explorerUrl: 'https://explorer.test.siamreiwa.com/',
    faucetUrl: 'https://faucet.test.siamreiwa.com/',
    statisticServiceUrl: 'https://service.test.siamreiwa.com',
    defaultNetworkType: 104,
    networkConfigurationDefaults: {
        maxMosaicDivisibility: 6,
        namespaceGracePeriodDuration: 2592000,
        lockedFundsPerAggregate: '10000000',
        maxCosignatoriesPerAccount: 25,
        blockGenerationTargetTime: 30,
        maxNamespaceDepth: 3,
        maxMosaicDuration: 315360000,
        minNamespaceDuration: 2592000,
        maxNamespaceDuration: 157680000,
        maxTransactionsPerAggregate: 100,
        maxCosignedAccountsPerAccount: 25,
        maxMessageSize: 1024,
        maxMosaicAtomicUnits: 8999999999000000,
        currencyMosaicId: '5282230404218E56',
        harvestingMosaicId: '5282230404218E56',
        defaultDynamicFeeMultiplier: 100,
        epochAdjustment: 1615853185,
        totalChainImportance: 7842928625000000,
        generationHash: 'B16B6D086414030485A8B11E79DA57FB9C9E86997111FAADA7F99B8A045ECF7B',
    },
};

export const defaultMainnetNetworkConfig: NetworkConfig =defaultTestnetNetworkConfig;
// export const defaultMainnetNetworkConfig: NetworkConfig = {
//     explorerUrl: 'https://explorer.test.siamreiwa.com/',
//     faucetUrl: 'https://faucet.test.siamreiwa.com/',
//     statisticServiceUrl: 'https://service.test.siamreiwa.com',
//     defaultNetworkType: 104,
//     networkConfigurationDefaults: {
//         maxMosaicDivisibility: 6,
//         namespaceGracePeriodDuration: 2592000,
//         lockedFundsPerAggregate: '10000000',
//         maxCosignatoriesPerAccount: 25,
//         blockGenerationTargetTime: 30,
//         maxNamespaceDepth: 3,
//         maxMosaicDuration: 315360000,
//         minNamespaceDuration: 2592000,
//         maxNamespaceDuration: 157680000,
//         maxTransactionsPerAggregate: 100,
//         maxCosignedAccountsPerAccount: 25,
//         maxMessageSize: 1024,
//         maxMosaicAtomicUnits: 8999999999000000,
//         currencyMosaicId: '12BEE2A928A7EBB1',
//         harvestingMosaicId: '12BEE2A928A7EBB1',
//         defaultDynamicFeeMultiplier: 100,
//         epochAdjustment: 1615853185,
//         totalChainImportance: 7842928625000000,
//         generationHash: '2786BBE44CC1A0A02F4E8F7D6168118F8BDFFD1B1E64F4A76A67017745AC13AD',
//     },
// };

const defaultNetworkConfig: Record<number, NetworkConfig> = {
    152: defaultTestnetNetworkConfig,
    104: defaultMainnetNetworkConfig,
};

const resolvedNetworkConfig: NetworkConfig = window['networkConfig'] || defaultNetworkConfig;

export const networkConfig = resolvedNetworkConfig;

import {
    knownNavItem,
    knownAccountsNavItem,
    knownVanitiesNavItem,
    repAliasNavItem,
    repMonitoredNavItem,
    repNavItem,
    repOnlineNavItem,
    repRootNavItem,
    repUptimeNavItem,
    distributionNavItem,
    supplyNavItem,
    developerFundsNavItem,
    networkNavItem,
    prWeightRequirementNavItem,
    accountNavItem,
    accountDelegatorsNavItem,
    accountRepresentativeNavItem,
    distributionBuckets,
    richListNavItem,
    peerVersionsNavItem,
    quorumNavItem,
    ncNavItem,
    accountInsightsNavItem,
    burnNavItem,
    richListSnapshotNavItem,
    blockNavItemParent,
    blockNavItem,
    receivableTxNavItem,
    confirmedTxNavItem,
    accountExport, accountOverviewNavItem, ledgerSizeNavItem, repScoresNavItem,
} from '../navigation/nav-items';
import { Knob } from './knobs/Knob';
import { REPRESENTATIVES_UPTIME_KNOBS, ROOT_REPRESENTATIVES_KNOBS } from './knobs/representatives.knobs';
import { KNOWN_ACCOUNTS_KNOBS } from './knobs/known.knobs';
import {
    ACCOUNT_DELEGATORS_KNOB,
    ACCOUNT_REPRESENTATIVE_KNOB,
    ACCOUNT_INSIGHTS_KNOB,
    ACCOUNT_RECEIVABLE_KNOB,
    ACCOUNT_CONFIRMED_KNOB,
    ACCOUNT_EXPORT_KNOBS, ACCOUNT_OVERVIEW_KNOBS,
} from './knobs/account.knobs';
import { DISTRIBUTION_RICH_LIST_KNOBS } from './knobs/distribution.knobs';
import { BLOCK_KNOBS } from './knobs/block.knobs';

export const apiDocumentationPages: Array<{
    route: string;
    apiPath: string;
    responseSchema: string;
    knobs: Array<Knob>;
    requestType: 'GET' | 'POST';
}> = [
    {
        route: `${accountNavItem.route}/${accountDelegatorsNavItem.route}`,
        apiPath: 'v1/account/delegators',
        responseSchema: 'DelegatorsOverviewDto',
        knobs: ACCOUNT_DELEGATORS_KNOB,
        requestType: 'POST',
    },
    {
        route: `${accountNavItem.route}/${accountInsightsNavItem.route}`,
        apiPath: 'v1/account/insights',
        responseSchema: 'InsightsDto',
        knobs: ACCOUNT_INSIGHTS_KNOB,
        requestType: 'POST',
    },
    {
        route: `${accountNavItem.route}/${accountRepresentativeNavItem.route}`,
        apiPath: 'v1/account/representative/[address]',
        responseSchema: 'AccountRepresentativeDto',
        knobs: ACCOUNT_REPRESENTATIVE_KNOB,
        requestType: 'GET',
    },
    {
        route: `${accountNavItem.route}/${receivableTxNavItem.route}`,
        apiPath: 'v1/account/receivable-transactions',
        responseSchema: 'ReceivableTransactionDto[]',
        knobs: ACCOUNT_RECEIVABLE_KNOB,
        requestType: 'POST',
    },
    {
        route: `${accountNavItem.route}/${accountExport.route}`,
        apiPath: 'v1/account/export',
        responseSchema: 'string',
        knobs: ACCOUNT_EXPORT_KNOBS,
        requestType: 'POST',
    },
    {
        route: `${accountNavItem.route}/${accountOverviewNavItem.route}`,
        apiPath: 'v1/account/overview/[address]',
        responseSchema: 'AccountOverviewDto',
        knobs: ACCOUNT_OVERVIEW_KNOBS,
        requestType: 'GET',
    },
    {
        route: `${accountNavItem.route}/${confirmedTxNavItem.route}`,
        apiPath: 'v1/account/confirmed-transactions',
        responseSchema: 'ConfirmedTransactionDto[]',
        knobs: ACCOUNT_CONFIRMED_KNOB,
        requestType: 'POST',
    },
    {
        route: `${repNavItem.route}/${repRootNavItem.route}`,
        apiPath: 'v1/representatives',
        responseSchema: 'RepresentativeDto[]',
        knobs: ROOT_REPRESENTATIVES_KNOBS,
        requestType: 'POST',
    },
    {
        route: `${repNavItem.route}/${repAliasNavItem.route}`,
        apiPath: 'v1/representatives/aliases',
        responseSchema: 'AliasedRepresentativeDto[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${repNavItem.route}/${repOnlineNavItem.route}`,
        apiPath: 'v1/representatives/online',
        responseSchema: 'string[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${repNavItem.route}/${repScoresNavItem.route}`,
        apiPath: 'v1/representatives/scores',
        responseSchema: 'RepScoreDto[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${repNavItem.route}/${repUptimeNavItem.route}`,
        apiPath: 'v1/representatives/uptime',
        responseSchema: 'RepresentativeUptimeDto[]',
        knobs: REPRESENTATIVES_UPTIME_KNOBS,
        requestType: 'POST',
    },
    {
        route: `${repNavItem.route}/${repMonitoredNavItem.route}`,
        apiPath: 'v1/representatives/monitored',
        responseSchema: 'MonitoredRepresentativeDto[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${repNavItem.route}/${prWeightRequirementNavItem.route}`,
        apiPath: 'v1/representatives/pr-weight',
        responseSchema: 'PRWeightRequirementDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${knownNavItem.route}/${knownAccountsNavItem.route}`,
        apiPath: 'v1/known/accounts',
        responseSchema: 'KnownAccountDto[]', // TODO: Fix type!
        knobs: KNOWN_ACCOUNTS_KNOBS,
        requestType: 'POST',
    },
    {
        route: `${knownNavItem.route}/${knownVanitiesNavItem.route}`,
        apiPath: 'v1/known/vanities',
        responseSchema: 'string[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${developerFundsNavItem.route}`,
        apiPath: 'v1/distribution/developer-funds',
        responseSchema: 'DeveloperFundsDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${burnNavItem.route}`,
        apiPath: 'v1/distribution/burn',
        responseSchema: 'BurnAccountsDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${supplyNavItem.route}`,
        apiPath: 'v1/distribution/supply',
        responseSchema: 'SupplyDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${developerFundsNavItem.route}`,
        apiPath: 'v1/distribution/developer-funds',
        responseSchema: 'DeveloperFundsDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${distributionBuckets.route}`,
        apiPath: 'v1/distribution/buckets',
        responseSchema: 'AccountDistributionStatsDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${distributionNavItem.route}/${richListNavItem.route}`,
        apiPath: 'v1/distribution/rich-list',
        responseSchema: 'AccountBalanceDto[]',
        knobs: DISTRIBUTION_RICH_LIST_KNOBS,
        requestType: 'POST',
    },
    {
        route: `${distributionNavItem.route}/${richListSnapshotNavItem.route}`,
        apiPath: 'v1/distribution/rich-list-snapshot',
        responseSchema: 'AccountBalanceDto[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${networkNavItem.route}/${peerVersionsNavItem.route}`,
        apiPath: 'v1/network/peers',
        responseSchema: 'PeerVersionsDto[]',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${networkNavItem.route}/${ledgerSizeNavItem.route}`,
        apiPath: 'v1/network/ledger-size',
        responseSchema: 'LedgerSizeDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${networkNavItem.route}/${quorumNavItem.route}`,
        apiPath: 'v1/network/quorum',
        responseSchema: 'QuorumDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${networkNavItem.route}/${ncNavItem.route}`,
        apiPath: 'v1/network/nakamoto-coefficient',
        responseSchema: 'NakamotoCoefficientDto',
        knobs: [],
        requestType: 'GET',
    },
    {
        route: `${blockNavItemParent.route}/${blockNavItem.route}`,
        apiPath: 'v1/block/[hash]',
        responseSchema: 'BlockDto',
        knobs: BLOCK_KNOBS,
        requestType: 'GET',
    },
];

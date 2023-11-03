"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPermit = exports.getTokenBalance = exports.findSecretToken = exports.SECRET_TOKENS = void 0;
exports.SECRET_TOKENS = [
    {
        name: "aUSDC",
        address: "secret1vkq022x4q8t8kx9de3r84u669l65xnwf2lg3e6",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 6,
        coingecko_id: "usdc",
        axelar_denom: "uusdc",
    },
    {
        name: "AXL",
        address: "secret1vcau4rkn7mvfwl8hf0dqa9p0jr59983e3qqe3z",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 6,
        coingecko_id: "axl",
        axelar_denom: "uaxl",
    },
    {
        name: "aWETH",
        address: "secret139qfh3nmuzfgwsx2npnmnjl4hrvj3xq5rmq8a0",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 18,
        coingecko_id: "eth",
        axelar_denom: "weth-wei",
    },
    {
        name: "aWBTC",
        address: "secret1guyayjwg5f84daaxl7w84skd8naxvq8vz9upqx",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 8,
        coingecko_id: "btc",
        axelar_denom: "wbtc-satoshi",
    },
    {
        name: "aWBNB",
        address: "secret19xsac2kstky8nhgvvz257uszt44g0cu6ycd5e4",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 18,
        coingecko_id: "bnb",
        axelar_denom: "wbnb-wei",
    },
    {
        name: "aBUSD",
        address: "secret1t642ayn9rhl5q9vuh4n2jkx0gpa9r6c3sl96te",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 18,
        coingecko_id: "busd",
        axelar_denom: "busd-wei",
    },
    {
        name: "aDAI",
        address: "secret1c2prkwd8e6ratk42l4vrnwz34knfju6hmp7mg7",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 18,
        coingecko_id: "dai",
        axelar_denom: "dai-wei",
    },
    {
        name: "aUNI",
        address: "secret1egqlkasa6xe6efmfp9562sfj07lq44z7jngu5k",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 18,
        coingecko_id: "uni",
        axelar_denom: "uni-wei",
    },
    {
        name: "aUSDT",
        address: "secret1wk5j2cntwg2fgklf0uta3tlkvt87alfj7kepuw",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 6,
        coingecko_id: "usdt",
        axelar_denom: "uusdt",
    },
    {
        name: "aFRAX",
        address: "secret16e230j6qm5u5q30pcc6qv726ae30ak6lzq0zvf",
        code_hash: "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e",
        decimals: 18,
        coingecko_id: "frax",
        axelar_denom: "frax-wei",
    },
];
const findSecretToken = (axlDenom) => {
    return exports.SECRET_TOKENS.find((token) => token.axelar_denom === axlDenom);
};
exports.findSecretToken = findSecretToken;
/**
 * Fetch secret network token balance
 * Using the permit signature, see permit function for more details
 * @param secretJS
 * @param contract
 * @param chainId
 * @param walletAddress
 * @param permit
 * @returns
 */
const getTokenBalance = (secretJS, contract, permit) => __awaiter(void 0, void 0, void 0, function* () {
    if (permit) {
        const msg = {
            balance: {},
        };
        const result = yield secretJS.query.compute.queryContract({
            contract_address: contract.address,
            code_hash: contract.codeHash,
            query: {
                with_permit: {
                    query: msg,
                    permit,
                },
            },
        });
        return result;
    }
    return -1;
});
exports.getTokenBalance = getTokenBalance;
const getPermit = (chainId, contracts, address) => __awaiter(void 0, void 0, void 0, function* () {
    const contractsString = contracts.join("_");
    const permKey = `perm_${chainId}_${contractsString}_${address}`;
    let permit;
    const permitStored = window.localStorage.getItem(permKey);
    if (permitStored)
        permit = JSON.parse(permitStored);
    // Not able to fetch permit signature from local storage,
    // Ask user to sign message
    if (!permit) {
        try {
            const result = yield window.keplr.signAmino(chainId, address, {
                chain_id: chainId,
                account_number: "0",
                sequence: "0",
                fee: {
                    amount: [{ denom: "uscrt", amount: "0" }],
                    gas: "1",
                },
                msgs: [
                    {
                        type: "query_permit",
                        value: {
                            permit_name: "secret-bridge-balance",
                            allowed_tokens: contracts,
                            permissions: ["balance"],
                        },
                    },
                ],
                memo: "",
            }, {
                preferNoSetFee: true,
                preferNoSetMemo: true,
            });
            permit = {
                params: {
                    permit_name: "secret-bridge-balance",
                    allowed_tokens: contracts,
                    chain_id: chainId,
                    permissions: ["balance"],
                },
                signature: result.signature,
            };
            window.localStorage.setItem(permKey, JSON.stringify(permit));
        }
        catch (err) {
            console.log("--- PERMIT ERROR ---");
            console.log(err);
        }
    }
    return permit;
});
exports.getPermit = getPermit;
//# sourceMappingURL=secretService.js.map
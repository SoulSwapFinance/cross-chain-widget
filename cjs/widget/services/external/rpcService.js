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
exports.getAllEvmTokensBalance = void 0;
const core_1 = require("@wagmi/core");
const ethers_1 = require("ethers");
const wagmi_1 = require("wagmi");
const ERC20__factory_1 = require("../../contracts/typechain/factories/ERC20__factory");
const constants_1 = require("../../core/constants");
const multicall3_1 = require("../../core/multicall3");
/**
 * Use readContracts to fetch all tokens balance in one call
 * native tokens & erc20 tokens will have different abi & contract & function name
 * Because it's not possible to fetch native token balance with balanceOf
 * @param tokens
 * @param userAddress
 * @returns
 */
const getTokensSupportingMultiCall = (tokens, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const multicallBalances = (yield (0, wagmi_1.readContracts)({
        contracts: tokens.map((t) => {
            const isTokenNative = t.address === constants_1.nativeEvmTokenAddress;
            return {
                chainId: +t.chainId,
                abi: isTokenNative ? multicall3_1.multicallAbi : ERC20__factory_1.ERC20__factory.abi,
                address: isTokenNative
                    ? multicall3_1.multicallAddress
                    : t.address,
                functionName: isTokenNative ? "getEthBalance" : "balanceOf",
                args: [userAddress],
            };
        }),
        allowFailure: true,
    }));
    return tokens.map((t, i) => {
        var _a;
        return (Object.assign(Object.assign({}, t), { balance: ethers_1.utils.formatUnits((_a = multicallBalances[i]) !== null && _a !== void 0 ? _a : ethers_1.constants.Zero, t.decimals) }));
    });
});
/**
 * Some chains don't support multicall, so we need to fetch them with Promise.all & fetchBalance
 * @param tokens
 * @param userAddress
 * @returns
 */
const getTokensWithoutMultiCall = (tokens, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const balances = (yield Promise.all(tokens.map((t) => __awaiter(void 0, void 0, void 0, function* () {
        let balance;
        try {
            if (t.address === constants_1.nativeEvmTokenAddress) {
                balance = yield (0, core_1.fetchBalance)({
                    address: userAddress,
                    chainId: +t.chainId,
                });
            }
            else {
                balance = yield (0, core_1.fetchBalance)({
                    address: userAddress,
                    chainId: +t.chainId,
                    token: t.address,
                });
            }
            return balance;
        }
        catch (error) {
            return {
                decimals: t.decimals,
                formatted: "0",
                symbol: t.symbol,
                value: ethers_1.constants.Zero,
            };
        }
    }))));
    return tokens.map((t, i) => (Object.assign(Object.assign({}, t), { balance: ethers_1.utils.formatUnits(balances[i].value, t.decimals) })));
});
const getAllEvmTokensBalance = (evmTokens, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    // Some tokens don't support multicall, so we need to fetch them with Promise.all
    // TODO: Once we support multicall on all chains, we can remove this split
    const chainWithoutMulticall = [314, 3141]; // Filecoin, & Filecoin testnet
    const splittedTokensByMultiCallSupport = evmTokens.reduce((acc, token) => {
        if (chainWithoutMulticall.includes(+token.chainId)) {
            acc[0].push(token);
        }
        else {
            acc[1].push(token);
        }
        return acc;
    }, [[], []]);
    const tokensNotSupportingMulticall = splittedTokensByMultiCallSupport[0];
    const tokensSupportingMulticall = splittedTokensByMultiCallSupport[1];
    const tokensMulticall = yield getTokensSupportingMultiCall(tokensSupportingMulticall, userAddress);
    const tokensNotMultiCall = yield getTokensWithoutMultiCall(tokensNotSupportingMulticall, userAddress);
    return [...tokensMulticall, ...tokensNotMultiCall];
});
exports.getAllEvmTokensBalance = getAllEvmTokensBalance;
//# sourceMappingURL=rpcService.js.map
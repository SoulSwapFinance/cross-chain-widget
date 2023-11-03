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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGnosisContext = void 0;
const safe_apps_sdk_1 = __importDefault(require("@safe-global/safe-apps-sdk"));
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const useSquidStore_1 = require("../store/useSquidStore");
const useMultiChain_1 = require("./useMultiChain");
const useSwap_1 = require("./useSwap");
const useGnosisContext = () => {
    const { connector } = (0, wagmi_1.useAccount)();
    const { fromChain, fromToken } = (0, useSwap_1.useSwap)();
    const { swapRoute } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    const { connectedAddress } = (0, useMultiChain_1.useMultiChain)(fromChain, fromToken);
    const [isGnosisContext, setisGnosisContext] = (0, react_1.useState)(false);
    /**
     * Method that will be used to send transaction
     * TODO: could have loaded the sdk when app load and stored globally
     */
    const getGnosisSafeContext = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        const appsSdk = new safe_apps_sdk_1.default();
        const safe = yield appsSdk.safe.getInfo();
        const isSafeContext = safe.chainId !== undefined &&
            safe.safeAddress !== undefined &&
            (connector === null || connector === void 0 ? void 0 : connector.id) === "safe";
        setisGnosisContext(isSafeContext);
        if (isSafeContext)
            return appsSdk;
        return undefined;
    }), [connector]);
    (0, react_1.useEffect)(() => {
        getGnosisSafeContext();
    }, [connector]);
    /**
     * Check if we are in a Gnosis Safe Context
     * And if source wallet address = destination address
     * If swapRoute.destinationAddress is not defined, it means that it's the same from the source
     */
    const isSameAddressAndGnosisContext = (0, react_1.useMemo)(() => {
        const destAddressSameAsSource = connectedAddress === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) ||
            (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) === undefined;
        return isGnosisContext && destAddressSameAsSource;
    }, [connectedAddress, swapRoute, isGnosisContext]);
    return {
        getGnosisSafeContext,
        isSameAddressAndGnosisContext,
        isGnosisContext,
    };
};
exports.useGnosisContext = useGnosisContext;
//# sourceMappingURL=useGnosisContext.js.map
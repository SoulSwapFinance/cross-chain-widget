"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCosmosContext = exports.CosmosProvider = exports.CosmosContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const useCosmos_1 = require("../../hooks/useCosmos");
exports.CosmosContext = react_1.default.createContext({});
const CosmosProvider = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(exports.CosmosContext.Provider, Object.assign({ value: (0, useCosmos_1.useCosmos)() }, { children: children })));
};
exports.CosmosProvider = CosmosProvider;
function useCosmosContext() {
    return react_1.default.useContext(exports.CosmosContext);
}
exports.useCosmosContext = useCosmosContext;
//# sourceMappingURL=CosmosProvider.js.map
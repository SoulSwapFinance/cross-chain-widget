"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
const react_1 = require("react");
const colorService_1 = require("../services/internal/colorService");
const useSquidStore_1 = require("../store/useSquidStore");
const useTheme = () => {
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const isHeaderDark = (0, react_1.useMemo)(() => { var _a; return (0, colorService_1.isColorDark)((_a = config.style) === null || _a === void 0 ? void 0 : _a.neutral); }, [config]);
    // If base content (text)
    // Is light, means that the mains backgrounds are dark
    const isGlobalDark = (0, react_1.useMemo)(() => { var _a; return !(0, colorService_1.isColorDark)((_a = config.style) === null || _a === void 0 ? void 0 : _a.baseContent); }, [config.style]);
    return { isHeaderDark, isGlobalDark };
};
exports.useTheme = useTheme;
//# sourceMappingURL=useTheme.js.map
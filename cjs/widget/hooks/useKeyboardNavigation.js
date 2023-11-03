"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyboardNavigation = void 0;
const react_1 = require("react");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const useKeyboardNavigation = () => {
    const { previousRoute } = (0, useSquidRouter_1.useSquidRouter)();
    const escFunction = (0, react_1.useCallback)((event) => {
        if (event.key === "Escape") {
            previousRoute();
        }
    }, [previousRoute]);
    (0, react_1.useEffect)(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);
};
exports.useKeyboardNavigation = useKeyboardNavigation;
//# sourceMappingURL=useKeyboardNavigation.js.map
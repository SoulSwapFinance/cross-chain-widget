"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Timer = () => {
    const [timer, setTimer] = (0, react_1.useState)(0);
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const secondsWithLeadingZero = seconds.toString().padStart(2, "0");
    const displayMinutes = minutes ? `${minutes}m` : "";
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [displayMinutes, secondsWithLeadingZero, "s"] }));
};
exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map
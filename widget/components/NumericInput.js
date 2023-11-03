var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import _debounce from "lodash/debounce";
import { useCallback, useEffect, useState } from "react";
export const NumericInput = (_a) => {
    var _b;
    var { parsedValueChanged, initialValue, forcedUpdateValue, maxDecimals } = _a, props = __rest(_a, ["parsedValueChanged", "initialValue", "forcedUpdateValue", "maxDecimals"]);
    const [inputValue, setInputValue] = useState(initialValue);
    // Probably a better way to handle this
    // This was introduce to handle the "MAX" button setting an amount
    // Other than that, this component is only sending value to the exterior
    // Without this, we were losing inputs such as ".05" that were forced parsed to "0.05" after debounce
    useEffect(() => {
        if (forcedUpdateValue) {
            setInputValue(forcedUpdateValue);
        }
    }, [forcedUpdateValue]);
    /**
     * Get the number of decimals of inputValue
     * If there are more decimals than the maxDecimals
     * remove the extra decimals
     */
    useEffect(() => {
        const split = inputValue.split(".");
        if (split.length > 1) {
            const decimals = split[1];
            if (maxDecimals && decimals.length > maxDecimals) {
                const newValue = `${split[0]}.${decimals.slice(0, maxDecimals)}`;
                setInputValue(newValue);
                parsedValueChanged(newValue);
            }
        }
    }, [maxDecimals]);
    const debouncePriceChanged = (value) => {
        if (value === null || value === void 0 ? void 0 : value.endsWith("."))
            return;
        parsedValueChanged(value !== null && value !== void 0 ? value : "");
    };
    // useCallback to memoizes the debounce function, prevents recreating it
    const debouncePriceUpdate = useCallback(_debounce(debouncePriceChanged, 700), []);
    const handlePriceChanged = (event) => {
        try {
            const formattedInput = event.currentTarget.value
                .replace(/[^0-9\.\,]/g, "")
                .replace(",", ".");
            // This is to prevent the user from typing more decimals than the decimals attribute of the token
            if (maxDecimals !== undefined) {
                const split = formattedInput.split(".");
                if (split.length > 1) {
                    const decimals = split[1];
                    if (decimals.length > maxDecimals) {
                        // Dont update anything
                        return;
                    }
                }
            }
            // Means the user is currently typing and will add decimal, no need to fetch or parse
            if ((formattedInput.includes(".") && formattedInput.endsWith("0")) ||
                formattedInput.endsWith(".") ||
                (formattedInput === "0" && (inputValue === "" || inputValue === "0"))) {
                setInputValue(formattedInput);
            }
            else if (!isNaN(+formattedInput)) {
                setInputValue(formattedInput.toString());
                debouncePriceUpdate(formattedInput.toString());
                // parsedValueChanged(formattedInput.toString());
            }
            else {
                setInputValue("");
            }
        }
        catch (error) {
            setInputValue("");
        }
    };
    return (_jsx("input", Object.assign({}, props, { onChange: handlePriceChanged, value: inputValue, type: "string", placeholder: (_b = props.placeholder) !== null && _b !== void 0 ? _b : "" })));
};
//# sourceMappingURL=NumericInput.js.map
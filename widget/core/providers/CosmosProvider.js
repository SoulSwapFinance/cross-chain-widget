import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { useCosmos } from "../../hooks/useCosmos";
export const CosmosContext = React.createContext({});
export const CosmosProvider = ({ children }) => {
    return (_jsx(CosmosContext.Provider, Object.assign({ value: useCosmos() }, { children: children })));
};
export function useCosmosContext() {
    return React.useContext(CosmosContext);
}
//# sourceMappingURL=CosmosProvider.js.map
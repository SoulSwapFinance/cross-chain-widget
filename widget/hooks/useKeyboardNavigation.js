import { useCallback, useEffect } from "react";
import { useSquidRouter } from "../hooks/useSquidRouter";
export const useKeyboardNavigation = () => {
    const { previousRoute } = useSquidRouter();
    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            previousRoute();
        }
    }, [previousRoute]);
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);
};
//# sourceMappingURL=useKeyboardNavigation.js.map
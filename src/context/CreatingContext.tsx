import { Dispatch, FC, SetStateAction, createContext, useState } from "react";
import { globalState } from "./data";
import { ContextProviderProps } from "../interfaces";
import { globalType } from "../interfaces";

interface GlobalContextType {
    state: globalType
    setState: Dispatch<SetStateAction<globalType>>
}

const GlobalContext = createContext<GlobalContextType>({
    state: globalState,
    setState: () => { }
});

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
    const [state, setState] = useState(globalState);
    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;
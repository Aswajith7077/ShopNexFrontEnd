import { createContext, useContext } from "react";



const HomeContext = createContext<any | undefined>(undefined);

const useHomeContext = () => {

    const home = useContext(HomeContext);
    if(!home){
        throw new Error("Context Error : home is UNDEFINED! Set it before use.")
    }
    return home;
}

export{
    useHomeContext,
    HomeContext
}
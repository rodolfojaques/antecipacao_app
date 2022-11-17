import { createContext,useState } from "react"

export const CardContext = createContext({})

export function CardProvider({children}){

    const [ cardAntecipacao, setCardAntecipacao ] = useState({})

    return(
        <CardContext.Provider value={{cardAntecipacao, setCardAntecipacao}}>
            {children}
        </CardContext.Provider>
    )
}
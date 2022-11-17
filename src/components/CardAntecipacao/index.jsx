import { useContext } from "react";
import { CardContext } from "../../providers/card";
import { CardAntecip } from "./styles";

export function CardAntecipacao() {
    const { cardAntecipacao } = useContext(CardContext)

    
    const [a,b,c,d] = Object.keys(cardAntecipacao)

    return(
        <CardAntecip>
            <div>
                <h2>VOCÊ RECEBERÁ:</h2>
                <hr></hr>
            </div>
            <p>Amanhã: <span>R$ {(cardAntecipacao[a] / 100) || "0.00"}</span></p>
            <p>Em {b || "15"} dias: <span>R$ {(cardAntecipacao[b] / 100) || "0.00"}</span></p>
            <p>Em {c || "30"} dias: <span>R$ {(cardAntecipacao[c] / 100) || "0.00"}</span></p>
            <p>Em {d || "90"} dias: <span>R$ {(cardAntecipacao[d] / 100) || "0.00"}</span></p>
        </CardAntecip>
    )
}
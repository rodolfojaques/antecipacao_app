import { CardAntecip } from "./styles";

export function CardAntecipacao() {
    return(
        <CardAntecip>
            <div>
                <h2>VOCÊ RECEBERÁ:</h2>
                <hr></hr>
            </div>
            <p>Amanhã: <span>R$ {}</span></p>
            <p>Em {} dias: <span>R$ {}</span></p>
            <p>Em {} dias: <span>R$ {}</span></p>
            <p>Em {} dias: <span>R$ {}</span></p>
        </CardAntecip>
    )
}
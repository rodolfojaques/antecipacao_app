import { CardAntecipacao } from "../../components/CardAntecipacao";
import { CardMain } from "../../components/CardMain";
import { Form } from "../../components/Form";
import { HomeStyle } from "./style";

export function Home() {
    return (
        <HomeStyle>
            <CardMain>
                <Form/>
                <CardAntecipacao/>
            </CardMain>
        </HomeStyle>
    )
}
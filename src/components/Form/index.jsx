import { FormCard } from "./styles";
import { TextField,Button } from "@mui/material";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { fontWeight } from "@mui/system";

export function Form(){

    const schema = yup.object().shape({
        venda: yup.number("O valor deve ser fornecido em números").required("Campo obrigatório"),
        parcelas: yup.number("O valor deve ser fornecido em números").required("Campo obrigatório"),
        mdr: yup.number("O valor deve ser fornecido em números").required("Campo obrigatório"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => console.log(data);

    return(
        <FormCard onSubmit={handleSubmit(formSchema)}>
            <h2>Simule sua Antecipação</h2>
            {errors?.venda?.message?
            <div>
                <label style={{
                    color:"red",
                    fontWeight: "bolder"
                    }}
                >
                    É esperado que o valor de venda seja um número *
                </label>
                <input style={{
                    borderColor:"red"
                    }}
                    type={"text"} id="venda" {...register("venda")}
                />
            </div>
            :
            <div>
                <label style={{
                    color:"#4F4F4F",
                    fontWeight: "bolder"
                    }}
                    >Informe o valor da venda *
                </label>
                <input type={"text"} id="venda" {...register("venda")}/>
            </div>}
            {errors?.parcelas?.message?
            <div>
                <label style={{
                    color:"red",
                    fontWeight: "bolder"
                    }}
                >
                    É esperado que a quantidade de parcelas seja um número *
                </label>
                <input style={{
                    borderColor:"red"
                    }} 
                    id="parcelas" {...register("parcelas")}
                />
            </div>
            :
            <div>
                <label style={{
                    color:"#4F4F4F",
                    fontWeight: "bolder"
                    }}
                    >Em quantas parcelas *
                </label>
                <input id="parcelas" {...register("parcelas")}/>
            </div>}
            {errors?.mdr?.message?
            <div>
                <label style={{
                    color:"red",
                    fontWeight: "bolder"
                    }}
                >
                    É esperado que o percentual de MDR seja um número *
                </label>
                <input style={{
                    borderColor:"red"
                    }} 
                    id="mdr" {...register("mdr")}
                />
            </div>
            :
            <div>
                <label style={{
                    color:"#4F4F4F",
                    fontWeight: "bolder"
                    }}
                    >Informe o percentual de MDR *
                </label>
                <input id="mdr" {...register("mdr")}/>
            </div>}
            <Button type="submit" variant="text">Antecipar</Button>
        </FormCard>
    )
}
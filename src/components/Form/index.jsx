import { FormCard } from "./styles";
import { TextField,Button } from "@mui/material";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

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
            <TextField error id="venda" label="Informe o valor da venda *" variant="outlined" color="warning" helperText={"É esperado que o valor seja um número"} {...register("venda")}/>
            :
            <TextField id="venda" label="Informe o valor da venda *" variant="outlined" {...register("venda")}/>}
            {errors?.parcelas?.message?
            <TextField error id="parcelas" label="Em quantas parcelas *" variant="outlined" color="warning" helperText={"É esperado que o valor seja um número"}{...register("parcelas")}/> 
            :
            <TextField id="parcelas" label="Em quantas parcelas *" variant="outlined" {...register("parcelas")}/>}
            {errors?.mdr?.message?
            <TextField error id="mdr" label="Informe o percentual de MDR *" variant="outlined" color="warning" helperText={"É esperado que o valor seja um número"} {...register("mdr")}/>
            :
            <TextField id="mdr" label="Informe o percentual de MDR *" variant="outlined" {...register("mdr")} onChange={Form.su}/>}
            <Button type="submit" variant="text">Antecipar</Button>
        </FormCard>
    )
}
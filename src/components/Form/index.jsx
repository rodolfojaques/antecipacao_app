import { FormCard } from "./styles";
import { Button } from "@mui/material";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import axios from "axios"
import { useContext } from "react";
import { CardContext } from "../../providers/card";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Form(){

    const { setCardAntecipacao } = useContext(CardContext)

    const URL = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app/"

    const schema = yup.object().shape({
        venda: yup.number("O valor deve ser fornecido em números").required("Campo obrigatório"),
        parcelas: yup.number("O valor deve ser fornecido em números").required("Campo obrigatório"),
        mdr: yup.number("O valor deve ser fornecido em números").required("Campo obrigatório"),
        days: yup.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = data => {
        const {venda,parcelas,mdr} = data

        const newData = {
            amount: venda * 100,
            installments: parcelas,
            mdr: mdr
        }
 
        const dataDays = data.days.split(".")
        const [a,b,c] = dataDays
       
        dataDays !== ['']?(
            
            newData.days = [
                1,
                Number(a) || 15,
                Number(b) || 30,
                Number(c) || 90,
            ]
        ):<></>

        axios.post(URL, newData)
        .then(r => setCardAntecipacao(r.data))
        .catch(err => {
            console.log(err);
            toast.error(`
                Erro na simulação!       
                Confira se os campos estão
                preenchidos corretamente, ou
                recaregue a página.                
            `, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }

    return(
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                {/* Same as */}
            <ToastContainer />
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
                        type={"text"} id="venda" placeholder="Ex: 122.50 (separação ' . ')" {...register("venda")}
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
                    <input type={"text"} id="venda" placeholder="Ex: 122.50 (separação ' . ')" {...register("venda")}/>
                </div>}
                {errors?.parcelas?.message?
                <div>
                    <label style={{
                        color:"red",
                        fontWeight: "bolder"
                        }}
                    >
                        É esperado que a quantidade de parcelas seja um número de 0 a 12 *
                    </label>
                    <input style={{
                        borderColor:"red"
                        }} 
                        id="parcelas" placeholder="Espera um número 0 a 12" {...register("parcelas")}
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
                    <input id="parcelas" placeholder="Espera um número 0 a 12" {...register("parcelas")}/>
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
                        id="mdr" placeholder="Ex. 2.5" {...register("mdr")}
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
                    <input id="mdr" placeholder="Ex. 2.5" {...register("mdr")}/>
                </div>}
                <div>
                    <label style={{
                        color:"#4F4F4F",
                        fontWeight: "bolder"
                        }}
                        >Quanto receberá em X dias?
                    </label>
                    <input id="days" placeholder="Ex: 30.65.100 (neste formato)" {...register("days")}/>
                </div>
                <Button type="submit" variant="text">Simular</Button>
            </FormCard>        
        </>

    )
}
import { View } from "react-native"
import {BoxInput} from "../../components/BoxInput/index"
import { ContainerForm, DoubleView, ScrollForm } from "./style"
import { useEffect, useState } from "react"
import { axios } from "react-native-axios/lib/axios"

export function Home() {
    //hooks - states
    const [data, setData] = useState()
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');


    function verificaUf(uf){
        switch (uf) {
    
          case "AC":
            return "Acre"
          case "AL":
            return "Alagoas"
          case "AP":
            return "Amapá"
          case "AM":
            return "Amazonas"
          case "BA":
            return "Bahia"
          case "CE":
            return "Ceará"
          case "DF":
            return "Distrito federal"
          case "ES":
            return "Espirito Santo"
          case "GO":
            return "Goiás"
          case "MA":
            return "Maranhão"
          case "MT":
            return "Mato Grosso"
          case "MS":
            return "Mato Grosso do Sul"
          case "MG":
            return "Minas Gerais"
          case "PA":
            return "Pará"
          case "PB":
            return "Paraíba"
          case "PR":
            return "Paraná"
          case "PE":
            return "Pernambuco"
          case "PI":
            return "Piauí"
          case "RJ":
            return "Rio de Janeiro"
          case "RN":
            return "Rio Grande do Norte"
          case "RS":
            return "Rio Grande do Sul"
          case "RO":
            return "Rondônia"
          case "RR":
            return "Roraima"
          case "SC":
            return "Santa Catarina"
          case "SP":
            return "São Paulo"
          case "SE":
            return "Sergipe"
          case "TO":
            return "Tocantins"
        
        }
      }



    //hooks - effect
        useEffect (async () => {
            try {
                if (cep != "" && cep.length >=8) {
                    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                };

                if(response.error){
                    alert("Verifique o CEP");
                    return;
                }

                setLogradouro(response.data.logradouro);
                setBairro(response.data.bairro);
                setCidade(response.data.localidade);
                setUf(response.data.uf);
                setEstado({verificaUf});

            } catch (error) {
                console.log(`Erro ao buscar o cep: ${error}`)
            }
        }, []);

    return(

        //ScrollForm
        //ContainerForm
        //BoxInput
            //Label
            //Input

        <ScrollForm>

            <ContainerForm>
                <BoxInput
                    textLabel= "informe o CEP:"
                    placeholder="XXXXX-XXX"
                    keyTipe='numeric'
                    maxLenght={9}
                    minLenght={8}
                    editable={true}
                    fieldValue={cep}
                    onChangeText={(tx) => {
                        setCep(tx)
                    }}
                    keyBoardType = "decimal-pad"
                />

                <BoxInput
                    textLabel= "Logradouro:"
                    placeholder="Logradouro..."
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel= "Bairro:"
                    placeholder="Bairro..."
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel= "Cidade:"
                    placeholder="Cidade..."
                    fieldValue={cidade}
                />

                <DoubleView>

                <BoxInput
                    fieldWidth={65}
                    textLabel= "Estado:"
                    placeholder="Estado..."
                    fieldValue={estado}
                />
                <BoxInput
                    fieldWidth={25}
                    textLabel= "UF:"
                    placeholder="UF"
                    fieldValue={uf}
                />
                
                </DoubleView>
            </ContainerForm>

        </ScrollForm>
    )
}
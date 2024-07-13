'use client'

import { CheckCircle } from "phosphor-react"
import * as S from "./styles"
import Button from "@/components/Button"
import { useRouter } from 'next/navigation';


export default function ConfirmSendForm() {

    const router = useRouter();

    function goToInicialPage() {
        router.push('/')
    }

    return (
        <S.ContainerConfirm>
            <S.ContainerInfo>
              <CheckCircle size={100} />
              <h1>OBRIGADO!</h1>
              <p>Formulário enviado com sucesso</p>
              <p>Embreve alguem irá entrar em contato com você</p>
              <Button 
              onClick={goToInicialPage}
              style={{background: "white", color: "black", marginTop: "10px"}}>
                Voltar a página inicial
              </Button>
            </S.ContainerInfo>
        </S.ContainerConfirm>
    )
}
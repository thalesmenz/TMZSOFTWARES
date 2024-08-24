'use client'

import Image from "next/image"
import * as S from "./styles"
import Button from "../Button"
import dinheiro from "./../../assets/dinheiro.jpg"

export default function Apresentation({ OpenWhatsApp }: any) {
    return (
        <S.Container>
            <S.Content>
                <S.TextContainer>
                    <S.Title>Comece a lucrar agora com seu software!</S.Title>
                    <S.Subtitle>Você já pensou em tirar suas ideias do papel por um preço que cabe no seu bolso? Chegou a hora de finalmente começar a lucrar online!</S.Subtitle>
                    <Button onClick={OpenWhatsApp}>Entrar em contato</Button>
                </S.TextContainer>
                <S.ImageContainer>
                    <Image 
                        alt="Dinheiro" 
                        width={500} 
                        height={400} 
                        src={dinheiro} 
                    />
                </S.ImageContainer>
            </S.Content>
        </S.Container>
    )
}
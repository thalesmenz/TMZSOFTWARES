import Button from "../Button";
import FormContact from "../FormContact";
import * as S from "./styles";

export default function ContactUs() {
    return (
        <S.TextContainer>
           <S.category>Fale Conosco</S.category>
            <S.title>Vamos Discutir Seu Projeto</S.title>
            <S.desc>
            Preencha o formulário abaixo e um de nossos especialistas entrará em contato para discutir os requisitos do seu projeto.
            </S.desc>
            <FormContact />
        </S.TextContainer>
    )
}
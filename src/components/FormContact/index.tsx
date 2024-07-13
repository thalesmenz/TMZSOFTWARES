'use state'

import { useState } from 'react';
import Button from "../Button";
import * as S from "./styles";

export default function FormContact() {
    const [phoneNumberFormat, setPhoneNumberFormat] = useState('');

    function formatPhoneNumber(input: any) {
        const cleaned = ('' + input).replace(/\D/g, '');

        const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            return `(${match[1]}${match[2] ? ') ' + match[2] : ''}${match[3] ? '-' + match[3] : ''}`;
        }
        return cleaned;
    };

    function handlePhoneChange(e: any) {
        const input = e.target.value;
        const formattedPhoneNumber = formatPhoneNumber(input);
        setPhoneNumberFormat(formattedPhoneNumber);
    };

    return (
        <S.FormContainer>
            <form action="https://formsubmit.co/thalesmenzner@gmail.com" method="post">
                <input type="hidden" name='_next' value="http://localhost:3000/confirmSendForm" />
                <input type="hidden" name='_captcha' value="false" />
                <S.FormGroup>
                    <S.Label htmlFor="name">Nome</S.Label>
                    <S.Input type="text" id="name" name="name" required />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label htmlFor="email">Email</S.Label>
                    <S.Input type="email" id="email" name="email" required />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label htmlFor="telefone">Número de telefone</S.Label>
                    <S.Input type="text" value={phoneNumberFormat} maxLength={15} onChange={handlePhoneChange} id="telefone" name="telefone" required />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label htmlFor="message">Meu projeto</S.Label>
                    <S.TextArea id="message" name="message" required />
                </S.FormGroup>
                <Button type="submit">Enviar</Button>
            </form>
        </S.FormContainer>
    );
}
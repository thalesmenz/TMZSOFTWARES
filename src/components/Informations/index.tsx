'use client';

import Image from 'next/image';
import * as S from './styles';
import programacao from "./../../assets/programacao.jpg"

export default function Informacoes() {
  return (
    <>
      <S.Container>
        <S.TextContainer>
          <p>Nossos Serviços</p>
          <h1>Soluções de Software Sob Medida para Seu Negócio</h1>
          <p>
          Seja para começar seu negócio do zero ou para trazer sua empresa para o mundo digital, nós estamos aqui para ajudar. Com nossas soluções acessíveis, você poderá:
          </p>
        </S.TextContainer>
        <S.ContentContainer>
          <S.ServiceBox>
            <S.TextBox>
              <h2>Desenvolvimento de Software Personalizado</h2>
              <p>Construímos soluções de software sob medida que atendem às necessidades e desafios únicos do seu negócio.</p>
            </S.TextBox>
            <S.TextBox>
              <h2>Desenvolver uma loja online</h2>
              <p>Criamos sua loja online para você fazer suas primeiras vendas</p>
            </S.TextBox>
            <S.TextBox>
              <h2>Desenvolvimento de Aplicativos</h2>
              <p>Desenvolvemos seu aplicativo para alcançar seus clientes do jeito que voce imaginou.</p>
            </S.TextBox>
          </S.ServiceBox>
          <S.ImageBox>
            <Image 
              alt="computador com letras de programação" 
              width={500} 
              height={450} 
              src={programacao}
            />
          </S.ImageBox>
        </S.ContentContainer>
        <h2>Fazemos tudo isso e muito mais.</h2>
      </S.Container>
      <S.Footer>
        <S.FooterItem>
          <p><strong>10+</strong></p>
          <p>Projetos concluídos</p>
        </S.FooterItem>
        <S.FooterItem>
          <p><strong>70k+</strong></p>
          <p>Gerados aos clientes</p>
        </S.FooterItem>
        <S.FooterItem>
          <p><strong>100,000+</strong></p>
          <p>Linhas de código escritas</p>
        </S.FooterItem>
      </S.Footer>
    </>
  );
}
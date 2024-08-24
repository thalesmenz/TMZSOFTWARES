import TestemonialCard from "../TestemonialCard";
import * as S from "./styles";

export default function Testemonials() {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Category>Testemunhos</S.Category>
        <S.Desc>
          Alguns testemunhos dos nossos clientes
        </S.Desc>
      </S.TextContainer>
      <S.TestimonialsContainer>
        <TestemonialCard
          // imageURL="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJpevBOQMgZ-Gaeb54y2Tin-o5vsoOtYW2nYtCpzkYqtj6ENWsHD4d1Bv-AUymOggA"
          name="ALEXANDRE"
          position="CEO - Linkour"
          testimonial="Estamos extremamente satisfeitos com o serviços prestados pela TMZ SOFTWARES no desenvolvimento do projeto Linkour. Desde o planejamento até a finalização, toda a equipe TMZ demonstrou um comprometimento excepcional em cumprir todas as etapas conforme o cronograma estabelecido. O profissionalismo e a eficiência deles foram fundamentais para o sucesso do projeto. Recomendo fortemente os serviços da TMZ SOFTWARES para quem busca qualidade e pontualidade em desenvolvimento de software."
        />
        <TestemonialCard
          // imageURL="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRJpevBOQMgZ-Gaeb54y2Tin-o5vsoOtYW2nYtCpzkYqtj6ENWsHD4d1Bv-AUymOggA"
          name="Alan Cerqueira"
          position="Tech Lead - Finanto"
          testimonial="Trabalhar com a TMZ SOFTWARE foi uma experiência extraordinária. Compreendeu nossas necessidades e nos ofereceu soluções inovadoras que superaram todas as nossas expectativas. A qualidade do trabalho, combinada com a entrega pontual e o profissionalismo, foi um diferencial significativo para o sucesso do nosso projeto. A TMZ SOFTWARE é um parceiro confiável e essencial para qualquer negócio que busca crescimento através de soluções tecnológicas de ponta."
        />
      </S.TestimonialsContainer>
    </S.Container>
  );
}
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
          name="João Silva"
          position="Gerente de Tecnologia - Ander Robotics"
          testimonial="Trabalhar com a TMZ SOFTWARE tem sido uma experiência excepcional. Desde o início, a equipe demonstrou um profundo entendimento das nossas necessidades e apresentou soluções inovadoras que superaram nossas expectativas. A qualidade do trabalho entregue, aliada à sua pontualidade e profissionalismo, tem sido um diferencial significativo para o sucesso dos nossos projetos. Sem dúvida, a TMZ SOFTWARE se tornou um parceiro de confiança e essencial para o nosso crescimento."
        />
      </S.TestimonialsContainer>
    </S.Container>
  );
}
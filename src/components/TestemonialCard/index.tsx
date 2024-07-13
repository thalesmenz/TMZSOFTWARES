import * as S from "./styles";

export default function TestemonialCard({imageURL, name, position, testimonial}: any) {
    return (
      <S.CardContainer>
        <S.Header>
          {
            imageURL ? 
              <S.Avatar src={imageURL} alt="User Avatar" />
              :
              null
          }
          <S.UserInfo>
            <S.UserName>{name}</S.UserName>
            <S.UserTitle>{position}</S.UserTitle>
          </S.UserInfo>
        </S.Header>
        <S.Testimonial>
          <p>
            {testimonial}
          </p>
        </S.Testimonial>
      </S.CardContainer>
    );
  }
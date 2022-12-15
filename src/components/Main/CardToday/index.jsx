import React from "react";
import { Check } from "phosphor-react";
import * as S from "./styles";

function CardToday({ dayData }) {
  const { name, done, currentSequence, highestSequence } = dayData;
  return (
    <S.Card>
      <S.Content>
        <S.WrapperText>
          <h2>{name}</h2>
          <p>Sequência atual: <span>{currentSequence}</span></p>
          <p>Seu recorde: <span>{highestSequence}</span></p>
        </S.WrapperText>
        <S.CheckBox switchColor={done}>
          <Check size={44} color="#ffffff" weight="bold" />
        </S.CheckBox>
      </S.Content>
    </S.Card>
  );
}

export default CardToday;

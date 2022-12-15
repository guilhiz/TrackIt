import React from 'react';
import { Trash } from 'phosphor-react';
import * as S from './styles';

function CardHabit({habit}) {
  const {days, id, name} = habit
  const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <S.Card>
      <S.Content>
        <S.ContainerName>
          <p>{name}</p>
          <div>
          <Trash size={25} color="#666666" />
          </div>
        </S.ContainerName>
        <S.ContainerBtn>
          {listDays.map((d, i) => <S.DayBtn key={i} switch={days.includes(i || 7) ? true : false}>{d}</S.DayBtn>)}
        </S.ContainerBtn>
      </S.Content>
    </S.Card>
    );
}

export default CardHabit;
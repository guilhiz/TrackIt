import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import  * as S  from './styles';

function Today({userData}) {
  return (
    <S.Container>
      <Header userData={userData} />
      <S.Content>
        <h1>Segunda, 17/05</h1>
        <p>Nenhum hábito concluído ainda</p>
        <S.TodayList>
          <S.TodayItem>Ler 1 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 2 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 3 capítulo do livro</S.TodayItem>
        </S.TodayList>
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Today;

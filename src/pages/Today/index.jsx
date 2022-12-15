import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { api } from "../../services";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import * as S from "./styles";

function Today() {
  const [todayData, setTodayData] = useState([]);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const token = userData.token;
    console.log(token)
    api
      .get("/habits/today", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setTodayData(res.data))
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Segunda, 17/05</h1>
        <p>Nenhum hábito concluído ainda</p>
        <S.TodayList>
          <S.TodayItem>Ler 1 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 2 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 3 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 3 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 3 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 3 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 3 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 3 capítulo do livro</S.TodayItem>
          <S.TodayItem>Ler 3 capítulo do livro</S.TodayItem>
        </S.TodayList>
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Today;

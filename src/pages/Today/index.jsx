import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { api } from "../../services";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import * as S from "./styles";
import CardToday from "../../components/Main/CardToday";

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
console.log(todayData)
  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Segunda, 17/05</h1>
        <p>Nenhum hábito concluído ainda</p>
        <S.TodayList>
         {todayData.length >= 1 && todayData.map((t)=> <CardToday key={t.id} dayData={t}  />)}
        </S.TodayList>
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Today;

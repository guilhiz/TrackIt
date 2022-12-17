import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { api } from "../../services";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import * as S from "./styles";
import CardToday from "../../components/Main/CardToday";

function Today() {
  const [todayData, setTodayData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { userData } = useContext(AuthContext);
  const token = userData.token;

  useEffect(() => {
    api
      .get("/habits/today", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setTodayData(res.data))
      .catch((erro) => console.log(erro));
  }, [refresh]);


  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Segunda, 17/05</h1>
        <p>Nenhum hábito concluído ainda</p>
        <S.TodayList>
          {todayData.length >= 1 && todayData.map((t) => <CardToday key={t.id} dayData={t} setRefresh={setRefresh} />)}
        </S.TodayList>
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Today;

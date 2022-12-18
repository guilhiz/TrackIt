import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { api } from "../../services";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import * as S from "./styles";
import CardToday from "../../components/Main/CardToday";

function Today() {
  const [todayData, setTodayData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { userData, setPercentage, percentage } = useContext(AuthContext);
  const token = userData.token;
  const date = dayjs().locale("pt-br").format("dddd, DD/MM");

  useEffect(() => {
    api
      .get("/habits/today", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setTodayData(res.data);
        calcPercentage(res.data);
      })
      .catch((erro) => console.log(erro));
  }, [refresh]);

  const calcPercentage = (data) => {
    const habitsDone = data.filter((t) => t.done);
    const percentageHabitsCompleted = (habitsDone.length / data.length) * 100;
    setPercentage(percentageHabitsCompleted.toFixed());
  };

  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>{date}</h1>
        <S.PercentageText switch={percentage < 1 ? false : true}>
          {percentage < 1 && "Nenhum hábito concluído ainda"}
          {percentage >= 1 && `${percentage}% dos hábitos concluídos`}
          </S.PercentageText>
        <S.TodayList>
          {todayData.length >= 1 && todayData.map((t) => <CardToday key={t.id} dayData={t} setRefresh={setRefresh} />)}
        </S.TodayList>
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Today;

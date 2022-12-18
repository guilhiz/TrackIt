import React, { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { api } from "../../services";
import { AuthContext } from "../../context";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as S from "./styles";

function Historic() {
  const [value, onChange] = useState(new Date());
  const [historicList, setHistoricLIst] = useState([]);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const token = userData.token;
    api
      .get("/habits/history/daily", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setHistoricLIst(res.data);
      })
      .catch((erro) => console.log(erro));
  }, []);

  const formatDate = (date) => {
    const formattedDate = dayjs(date).locale("pt-br").format("DD/MM/YYYY");
    const day = formattedDate.split("/")[0];
    for (let i = 0; i < historicList.length; i++) {
      const item = historicList[i];
      if (formattedDate === item.day) {
        const habitsDone = item.habits.filter((h) => h.done);
        const allTasksDone = habitsDone.length === item.habits.length;
        if (allTasksDone) {
          return <S.GreenDay>{day}</S.GreenDay>;
        }
        return <S.RedDay>{day}</S.RedDay>;
      }
    }

    return day;
  };

  const handleClick = (value) => {
    const formattedDate = dayjs(value).locale("pt-br").format("DD/MM/YYYY");
  };
  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Histórico</h1>
        <S.CalendarContainer>
          <Calendar
            className="calendar"
            locale="pt-BR"
            calendarType="US"
            formatDay={(locale, date) => formatDate(date)}
            onClickDay={(value) => handleClick(value)}
          />
        </S.CalendarContainer>
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Historic;

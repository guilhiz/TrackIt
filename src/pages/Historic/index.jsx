import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { api } from "../../services";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as S from "./styles";

function Historic() {
  const [value, onChange] = useState(new Date());

  useEffect(() => {

  })

  const formatDate = (date) => {
    const formattedDate = dayjs(date).locale("pt-br").format("DD/MM/YYYY");
  };

  const handleClick = (date) => {
    const formattedDate = dayjs(date).locale("pt-br").format("DD/MM/YYYY");
    console.log(formattedDate);
  };
  console.log(value);
  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Histórico</h1>
        <S.CalendarContainer>
          <Calendar
            className="calendar"
            locale="pt-BR"
            formatDay={(_, date) => formatDate(date)}
            onClickDay={(date) => handleClick(date)}
          />
        </S.CalendarContainer>
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Historic;

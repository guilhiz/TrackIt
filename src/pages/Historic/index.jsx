import React, { useState, useEffect, useContext } from "react";
import { Check, X } from "phosphor-react";
import { ClipLoader } from "react-spinners";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services";
import { AuthContext } from "../../context";


import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as S from "./styles";

function Historic() {
  const [historicList, setHistoricLIst] = useState([]);
  const { userData } = useContext(AuthContext);
  const toastConfig = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

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

  const toastLayout = (habits) => {
    return habits.map((h) => {
      return (
        <p key={h.id}>
          {" "}
          Hábito: {h.name} {h.done && <Check size={16} color="#97cb63" weight="bold" />}
          {!h.done && <X size={16} color="#ea5766" weight="bold" />}
        </p>
      );
    });
  };

  const handleClick = (value) => {
    const formattedDate = dayjs(value).locale("pt-br").format("DD/MM/YYYY");
    const day = formattedDate.split("/")[0];
    historicList.forEach((item) => {
      if (formattedDate === item.day) {
        toast(
          <div>
            {`Dia: ${day}`}
            {toastLayout(item.habits)}
          </div>,
          toastConfig
        );
      }
    });
  };

  if (historicList.length < 1) {
    return (
      <S.ContainerLoading>
        <ClipLoader color="#52B6FF" size={150} />
      </S.ContainerLoading>
    );
  }

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
      <ToastContainer />
    </S.Container>
  );
}

export default Historic;

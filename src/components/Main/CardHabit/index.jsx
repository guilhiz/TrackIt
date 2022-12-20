import React, { useContext, useState } from "react";
import { api } from "../../../services";
import { AuthContext } from "../../../context";
import { Trash } from "phosphor-react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import * as S from "./styles";

function CardHabit({ habit, setRefresh }) {
  const { days, id, name } = habit;
  const { userData } = useContext(AuthContext);
  const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [switchAnimation, setSwitchAnimation] = useState(false);

  const deleteHabit = () => {
    const token = userData.token;
    confirmAlert({
      title: "Confirmação",
      message: "Você realmente quer excluir o hábito?",
      buttons: [
        {
          label: "Sim",
          onClick: () => {
            api
              .delete(`/habits/${id}`, { headers: { Authorization: `Bearer ${token}` } })
              .then(() => {
                setSwitchAnimation(true);
                setTimeout(() => setRefresh((current) => !current), 500);
              })
              .catch((erro) => console.log(erro));
          },
        },
        {
          label: "Não",
        },
      ],
    });
  };

  return (
    <S.Card switch={switchAnimation} data-test="habit-container">
      <S.Content>
        <S.ContainerName>
          <p data-test="habit-name">{name}</p>
          <div data-test="habit-delete-btn" onClick={deleteHabit}>
            <Trash size={25} color="#666666" />
          </div>
        </S.ContainerName>
        <S.ContainerBtn>
          {listDays.map((d, i) => (
            <S.DayBtn data-test="habit-day" key={i} switch={days.includes(i) ? true : false}>
              {d}
            </S.DayBtn>
          ))}
        </S.ContainerBtn>
      </S.Content>
    </S.Card>
  );
}

export default CardHabit;

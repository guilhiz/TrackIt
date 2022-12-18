import React, { useState, useContext } from "react";
import { api } from "../../../services";
import { AuthContext } from "../../../context";
import * as S from "./styles";

function CreateHabit({ setRefresh, setSwitchCreate, name, setName, days, setDays}) {
  const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { userData } = useContext(AuthContext);
  console.log(name)

  const handleClick = (i) => {
    if (days.includes(i)) {
      let index = days.indexOf(i)
      const arr = [...days]
      arr.splice(index, 1)
      setDays(arr)
      return
    }
    setDays((c) => [...c, i]);
  };

  const createHabit = () => {
    if (name === "" || days === []) return false;

    const token = userData.token;
    const body = { name, days };
    api
      .post("/habits", body, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setName("");
        setDays([]);
        setRefresh((current) => !current);
        setSwitchCreate((current) => !current);
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <S.Card>
      <S.Content>
        <S.Input type="text" placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)} />
        <S.ContainerBtn>
          {listDays.map((d, i) => (
            <S.DayBtn key={i} onClick={() => handleClick(i)} switch={days.includes(i) ? true : false}>
              {d}
            </S.DayBtn>
          ))}
        </S.ContainerBtn>
        <S.ContainerSaveBtn>
          <p onClick={() => setSwitchCreate((current) => !current)}>Cancelar</p>
          <button onClick={createHabit}>Salvar</button>
        </S.ContainerSaveBtn>
      </S.Content>
    </S.Card>
  );
}

export default CreateHabit;

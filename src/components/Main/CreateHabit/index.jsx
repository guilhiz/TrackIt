import React, { useState, useContext } from "react";
import { api } from "../../../services";
import { AuthContext } from "../../../context";
import * as S from "./styles";

function CreateHabit({setRefresh, setSwitchCreate}) {
  const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { userData } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);

  const handleClick = (i) => {
    if (days.includes(i)) return;
    if (i === 0) {
      setDays((c) => [...c, 7]);
      return;
    }
    setDays((c) => [...c, i]);
  };

  const handleSubmit = () => {
    const token = userData.token;
    const body = { name, days };
    api.post("/habits", body, { headers: { Authorization: `Bearer ${token}` } })
    .then(() => {
      setName("")
      setDays([])
      setRefresh(current => !current)
      setSwitchCreate(current => !current)
    })
    .catch((erro) => console.log(erro));
  };

  return (
    <S.Card>
      <S.Content>
        <S.Input type="text" placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)} />
        <S.ContainerBtn>
          {listDays.map((d, i) => (
            <S.DayBtn key={i} onClick={() => handleClick(i)} switch={days.includes(i || 7) ? true : false}>
              {d}
            </S.DayBtn>
          ))}
        </S.ContainerBtn>
        <S.ContainerSaveBtn>
          <p>Cancelar</p>
          <button onClick={handleSubmit}>Salvar</button>
        </S.ContainerSaveBtn>
      </S.Content>
    </S.Card>
  );
}

export default CreateHabit;

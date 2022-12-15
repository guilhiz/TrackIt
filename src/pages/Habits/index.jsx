import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context";
import { api } from "../../services";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import CreateHabit from "../../components/Main/CreateHabit";
import CardHabit from "../../components/Main/CardHabit";
import * as S from "./styles";

function Habits() {
  const [switchCreate, setSwitchCreate] = useState(false);
  const { userData } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [refresh, setRefresh] = useState([]);

  useEffect(() => {
    const token = userData.token;
    api
      .get("/habits", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setHabits(res.data))
      .catch((erro) => console.log(`Ocorreu um erro no request ${erro}`));
  }, [refresh]);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <div>
          <h1>Meus hábitos</h1>
          <S.CreateBtn onClick={() => setSwitchCreate((current) => !current)}>+</S.CreateBtn>
        </div>
        {switchCreate && <CreateHabit setRefresh={setRefresh} setSwitchCreate={setSwitchCreate} />}
        {habits.length >= 1 && habits.map((h) => <CardHabit key={h.name} habit={h} />)}
        {habits.length < 1 && (
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        )}
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Habits;

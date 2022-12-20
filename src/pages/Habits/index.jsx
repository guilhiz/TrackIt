import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import { AuthContext } from "../../context";
import { ClipLoader } from "react-spinners";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import CreateHabit from "../../components/Main/CreateHabit";
import CardHabit from "../../components/Main/CardHabit";
import * as S from "./styles";

function Habits() {
  const [switchCreate, setSwitchCreate] = useState(false);
  const [habits, setHabits] = useState();
  const [refresh, setRefresh] = useState([]);
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const { userData, calcPercentage } = useContext(AuthContext);
  const token = userData.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.token === undefined) {
      navigate("/");
    }
    api
      .get("/habits", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setHabits(res.data)
        calcPercentage()
      })
      .catch((erro) => console.log(erro));
  }, [refresh]);

  if (!habits) {
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
        <div>
          <h1>Meus hábitos</h1>
          <S.CreateBtn data-test="habit-create-btn" onClick={() => setSwitchCreate((current) => !current)}>+</S.CreateBtn>
        </div>
        {switchCreate && (
          <CreateHabit
            name={name}
            setName={setName}
            days={days}
            setDays={setDays}
            setRefresh={setRefresh}
            setSwitchCreate={setSwitchCreate}
          />
        )}
        {habits.length >= 1 && habits.map((h) => <CardHabit setRefresh={setRefresh} key={h.name} habit={h} />)}
        {habits.length < 1 && (
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        )}
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Habits;

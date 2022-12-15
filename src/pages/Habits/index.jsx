import React, {useState} from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import CreateHabit from "../../components/CreateHabit";
import * as S from "./styles";

function Habits() {
  const [switchCreate, setSwitchCreate] = useState(false)
  return (
    <S.Container>
      <Header />
      <S.Content>
        <div>
          <h1>Meus hábitos</h1>
          <S.CreateBtn onClick={() => setSwitchCreate(current => !current)}>+</S.CreateBtn>
        </div>
        {switchCreate && <CreateHabit />}
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Habits;

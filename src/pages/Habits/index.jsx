import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as S from "./styles";

function Habits() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <div>
          <h1>Meus hábitos</h1>
          <S.CreateBtn>+</S.CreateBtn>
        </div>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </S.Content>
      <Menu />
    </S.Container>
  );
}

export default Habits;

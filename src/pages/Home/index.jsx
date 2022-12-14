import React from "react";
import  * as S  from "./styles";
import logo from "../../assets/Logo.png"


function home() {

  return (
    <S.Container>
      <img src={logo} alt="" />
      <form action="">
        <input type="email" />
        <input type="password" />
        <button type="submit">Entrar</button>
      </form>
      <a>Não tem uma conta? Cadastre-se!</a>
    </S.Container>
  );
}

export default home;

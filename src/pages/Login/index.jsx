import React from "react";
import { useForm } from "react-hook-form";


import logo from "../../assets/Logo.png";
import * as S from "./styles";

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="" />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input type="email" {...register("email")} />
          <S.Input type="password" {...register("password")} />
          <S.SubmitBtn type="submit">Entrar</S.SubmitBtn>
        </S.Form>
        <S.StyledLink to={"/cadastro"}>Não tem uma conta? Cadastre-se!</S.StyledLink>
      </S.Content>
    </S.Container>
  );
}

export default Login;

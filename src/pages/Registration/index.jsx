import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services";

import logo from "../../assets/Logo.png";
import * as S from "./styles";

function Registration() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    api.post("/auth/sign-up", data)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))
  };

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="" />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input type="email" {...register("email", { required: true })} placeholder="email" />
          <S.Input type="password" {...register("password", { required: true })} placeholder="senha" />
          <S.Input type="text" {...register("name", { required: true })} placeholder="nome" />
          <S.Input type="text" {...register("image", { required: true })} placeholder="foto" />
          <S.SubmitBtn type="submit">Cadastrar</S.SubmitBtn>
        </S.Form>
        <S.StyledLink to={"/"}>Já tem uma conta? Faça login!</S.StyledLink>
      </S.Content>
    </S.Container>
  );
}

export default Registration;

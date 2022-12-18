import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { api } from "../../services";

import logo from "../../assets/Logo.png";
import * as S from "./styles";

function Registration() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    api
      .post("/auth/sign-up", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((erro) => {
        alert(`Verifique se as informações foram digitadas corretamente! ${erro}`);
        console.log(erro)
        setLoading(false);
      });
  };

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="" />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input disabled={loading} type="email" {...register("email", { required: true })} placeholder="email" />
          <S.Input
            disabled={loading}
            type="password"
            {...register("password", { required: true })}
            placeholder="senha"
          />
          <S.Input disabled={loading} type="text" {...register("name", { required: true })} placeholder="nome" />
          <S.Input disabled={loading} type="text" {...register("image", { required: true })} placeholder="foto" />
          <S.SubmitBtn disabled={loading} type="submit">
            {loading && <PulseLoader color="#FFFFFF" loading={loading} margin={8} size={15} />}
            {!loading && "Cadastrar"}
          </S.SubmitBtn>
        </S.Form>
        <S.StyledLink to={"/"}>Já tem uma conta? Faça login!</S.StyledLink>
      </S.Content>
    </S.Container>
  );
}

export default Registration;

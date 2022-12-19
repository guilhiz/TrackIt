import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { api } from "../../services";
import { AuthContext } from "../../context";

import logo from "../../assets/Logo.png";
import * as S from "./styles";

function Login() {
  const { register, handleSubmit } = useForm();
  const { setUserData, userData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoading(true);
    if (userData.token) {
      navigate("/");
    }
    api
      .post("/auth/login", data)
      .then((res) => {
        setUserData(res.data);
        localStorage.setItem("token", res.data.token);
        setLoading(false);
        navigate("/hoje");
      })
      .catch((erro) => {
        console.log(erro);
        alert(`Verifique se as informações foram digitadas corretamente! ${erro}`);
        setLoading(false);
      });
  };

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="" />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input type="email" disabled={loading} {...register("email", { required: true })} placeholder="email" />
          <S.Input
            type="password"
            disabled={loading}
            {...register("password", { required: true })}
            placeholder="senha"
          />
          <S.SubmitBtn type="submit" disabled={loading}>
            {loading && <PulseLoader color="#FFFFFF" loading={loading} margin={8} size={15} />}
            {!loading && "Entrar"}
          </S.SubmitBtn>
        </S.Form>
        <S.StyledLink to={"/cadastro"}>Não tem uma conta? Cadastre-se!</S.StyledLink>
      </S.Content>
    </S.Container>
  );
}

export default Login;

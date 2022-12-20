import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { api } from "../../services";
import { AuthContext } from "../../context";

import logo from "../../assets/Logo.png";
import * as S from "./styles";

function Login() {
  const { register, handleSubmit } = useForm();
  const { setUserData, userData, setTheme, theme } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.token !== undefined) {
      navigate("/hoje");
    }
  });

  const themeToggler = () => {
    setTheme((current) => !current);
  };

  const onSubmit = (data) => {
    setLoading(true);
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
        <S.ContainerDarkMode>
          <input type="checkbox" id="darkMode-toggle" checked={theme} onChange={() => themeToggler()} />
          <S.LabelDarkMode htmlFor="darkMode-toggle">
            <div></div>
          </S.LabelDarkMode>
        </S.ContainerDarkMode>

        <img src={logo} alt="" />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            data-test="email-input"
            type="email"
            disabled={loading}
            {...register("email", { required: true })}
            placeholder="email"
          />
          <S.Input
            data-test="password-input"
            type="password"
            disabled={loading}
            {...register("password", { required: true })}
            placeholder="senha"
          />
          <S.SubmitBtn data-test="login-btn" type="submit" disabled={loading}>
            {loading && <PulseLoader color="#FFFFFF" loading={loading} margin={8} size={15} />}
            {!loading && "Entrar"}
          </S.SubmitBtn>
        </S.Form>
        <S.StyledLink data-test="signup-link" to={"/cadastro"}>
          Não tem uma conta? Cadastre-se!
        </S.StyledLink>
      </S.Content>
    </S.Container>
  );
}

export default Login;

import React, { useContext } from "react";
import { AuthContext } from "../../context";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import * as S from "./styles";

function Menu() {
  const { percentage } = useContext(AuthContext);
  return (
    <S.Container data-test="menu">
      <S.Content>
        <S.StyledLink data-test="habit-link" to={`/habitos`}>Hábitos</S.StyledLink>
        <Link data-test="today-link" to={`/hoje`}>
          <div>

            <CircularProgressbar
              value={percentage}
              text="Hoje"
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </div>
        </Link>
        <S.StyledLink data-test="history-link" to={`/historico`}>Histórico</S.StyledLink>
      </S.Content>
    </S.Container>
  );
}

export default Menu;

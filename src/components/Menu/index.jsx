import React, { useContext } from "react";
import { AuthContext } from "../../context";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import * as S from "./styles";

function Menu() {
  const { percentage } = useContext(AuthContext);
  return (
    <S.Container>
      <S.Content>
        <S.StyledLink to={`/habitos`}>Hábitos</S.StyledLink>
        <Link to={`/hoje`}>
          <div>
            <CircularProgressbar
              value={percentage}
              text="entre"
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
        <S.StyledLink to={`/historico`}>Histórico</S.StyledLink>
      </S.Content>
    </S.Container>
  );
}

export default Menu;

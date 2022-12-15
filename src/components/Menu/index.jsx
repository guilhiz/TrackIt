import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import * as S from "./styles";

function Menu() {
  const percentage = 50;
  return (
    <S.Container>
      <S.Content>
        <p>Hábitos</p>
        <div>
        <CircularProgressbar value={percentage} text="entre"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}/>
        </div>
        <p>Histórico</p>
      </S.Content>
    </S.Container>
  );
}

export default Menu;

import { SignOut } from "phosphor-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

import * as S from "./styles";

function Header() {
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const signout = () => {
    localStorage.clear();
    setUserData({});
    navigate("/");

    // setTimeout(() => {
    //   localStorage.clear();
    // }, 1000);
  };

  return (
    <S.Container>
      <S.Content>
        <S.StyledLink to="/">
          <S.Logo>TrackIt</S.Logo>
        </S.StyledLink>
        <S.ContainerProfile onClick={signout}>
          <S.SignOutContainer>
            <SignOut size={32} color="#126BA5" />
            <p>Exit</p>
          </S.SignOutContainer>
          <S.ProfileImg src={userData.image} alt="" />
        </S.ContainerProfile>
      </S.Content>
    </S.Container>
  );
}

export default Header;

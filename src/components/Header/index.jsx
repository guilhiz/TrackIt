import React from 'react';
import trackIt from "../../assets/TrackIt.png"
import  * as S  from './styles';

function Header({userData}) {
  return (
    <S.Container>
      <S.Content>
        <S.LogoImg src={trackIt} alt="" />
        <S.ProfileImg src={userData.image} alt="" />
      </S.Content>
    </S.Container>
  );
}

export default Header;
import React, {useContext} from 'react';
import trackIt from "../../assets/TrackIt.png"
import { AuthContext } from '../../context';
import  * as S  from './styles';

function Header() {
  const {userData} = useContext(AuthContext)
  
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
import React, {useContext} from 'react';
import { AuthContext } from '../../context';
import  * as S  from './styles';

function Header() {
  const {userData} = useContext(AuthContext)

  return (
    <S.Container>
      <S.Content>
        <S.Logo>TrackIt</S.Logo>
        <S.ProfileImg src={userData.image} alt="" />
      </S.Content>
    </S.Container>
  );
}

export default Header;
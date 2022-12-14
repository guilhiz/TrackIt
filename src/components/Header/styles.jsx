import styled from "styled-components";
import { colors as c } from "../../constants";

export const Container = styled.header`
  height: 70px;
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${c.title};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
display: block;
width: 97px;
`
export const ProfileImg = styled.img`
display: block;
width: 51px;
border-radius: 50%;
`

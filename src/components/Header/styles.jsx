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

export const Logo = styled.p`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 49px;
  color: #ffffff;
`;
export const ProfileImg = styled.img`
  display: block;
  width: 51px;
  border-radius: 50%;
`;

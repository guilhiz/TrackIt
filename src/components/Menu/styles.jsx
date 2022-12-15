import styled from "styled-components";
import { colors as c } from "../../constants";

export const Container = styled.footer`
  width: 100%;
  height: 70px;
  background-color: ${c.white};
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0px 36px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  p {
    color: ${c.button};
    font-size: 18px;
    line-height: 22px;
  }
  div {
    width: 80px;
    height: 100%;
    display: block;
    margin-top: -45px;
  }
`;

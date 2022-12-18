import styled from "styled-components";
import { colors as c } from "../../constants";

export const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  padding: 90px 17px 100px;
  background-color: ${c.background};
  margin: 0 auto;
`;

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 20vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  > p {
    font-size: 18px;
    line-height: 22px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
`;

export const CreateBtn = styled.button`
  width: 40px;
  height: 35px;
  background: ${c.button};
  border-radius: 5px;
  cursor: pointer;
  border: none;

  font-size: 26.976px;
  line-height: 34px;
  color: ${c.white};
`;

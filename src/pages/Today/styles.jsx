import styled from "styled-components";
import { colors as c } from "../../constants";

export const Container = styled.div`
  width: 375px;
  height: 100%;
  padding: 90px 17px 100px;
  background-color: ${c.background};
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 23px;
    line-height: 29px;
    color: ${c.title};
    margin-bottom: 5px;
  }
  > p {
    font-size: 18px;
    line-height: 22px;
    color: #bababa;
  }
`;

export const TodayList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 23px 0px;
  margin-top: 28px;
`;
export const TodayItem = styled.li`

  width: 100%;
  height: 94px;
  background: ${c.white};
  border-radius: 5px;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  padding: 90px 17px 100px;
  background-color: ${props => props.theme.background};
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100%;
    padding: 90px 200px 100px;
    h1 {
      text-align: center;
    }
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 20vw;
  background-color: ${props => props.theme.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 23px;
    line-height: 29px;
    color: ${props => props.theme.title};
    margin-bottom: 5px;
  }
`;

export const PercentageText = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => (props.switch ? props.theme.check : "#bababa")};
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const TodayList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
  margin-top: 28px;
`;

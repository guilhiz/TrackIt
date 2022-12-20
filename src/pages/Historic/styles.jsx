import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  padding: 90px 17px 100px;
  background-color: ${props => props.theme.background};
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100%;
    padding: 90px 400px 100px;
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
`;

export const CalendarContainer = styled.div`
  margin-top: 20px;

  .calendar {
    width: 100%;
    height: 402px;
    border-radius: 10px;
    border: none;
    background-color: ${props => props.theme.calendar};
  }

  .calendar .react-calendar__month-view__days {
    display: flex;
    gap: 11px 0px;
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 51px;
    }
  }

  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 1;
    }
  }
`;

export const GreenDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 34px;
  background-color: #97cb63;
  border-radius: 50%;
`;
export const RedDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 34px;
  background-color: #ea5766;
  border-radius: 50%;
`;

import styled from "styled-components";
import { colors as c } from "../../constants";

export const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  padding: 90px 17px 100px;
  background-color: ${c.background};
  margin: 0 auto;
  > h1 {
  }
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

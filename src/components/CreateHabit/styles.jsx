import styled from "styled-components";
import { colors as c } from "../../constants";

export const Card = styled.div`
  width: 100%;
  height: 180px;
  background: ${c.white};
  border-radius: 5px;
  padding: 18px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background: ${c.white};
  border: 1px solid ${c.border};
  border-radius: 5px;
  padding-left: 11px;

  font-size: 19.976px;
  line-height: 25px;
  color: ${c.text};

  ::placeholder {
    font-size: 20px;
    line-height: 25px;
    color: ${c.placeholder};
    opacity: 1;
  }
`;
export const ContainerBtn = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

export const DayBtn = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => props.switch ? "#CFCFCF" : "#FFFFFF"};
  border: 1px solid ${c.border};
  border-radius: 5px;
  cursor: pointer;

  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => props.switch ? "#FFFFFF" : "#DBDBDB"};;
`;

export const ContainerSaveBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 35px;
  margin-top: 29px;
  gap: 0px 23px;
  > button {
    height: 100%;
    width: 84px;
    background: ${c.button};
    border-radius: 4.63636px;
    border: none;

    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: ${c.white};
  }
  > p {
    font-size: 15.976px;
    line-height: 20px;
    color: ${c.button};
  }
`;

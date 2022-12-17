import styled from "styled-components";
import { colors as c } from "../../../constants";

export const Card = styled.div`
  width: 100%;
  height: 94px;
  background: ${c.white};
  border-radius: 5px;
  padding: 13px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperText = styled.div`
  width: 70%;
  > h2 {
    font-size: 19.976px;
    line-height: 25px;
    color: ${c.text};
    margin-bottom: 7px;
  }
  > p {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 1px;
  }
  span {
    color: ${(props) => props.switchColor && c.check};
  }
`;

export const CheckBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 69px;
  background: ${(props) => props.switchColor && c.check};
  background: ${(props) => !props.switchColor && "#EBEBEB"};
  border-radius: 5px;
  border: none;
`;

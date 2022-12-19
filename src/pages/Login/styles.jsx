import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors as c } from "../../constants";
import "animate.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 375px;
  max-width: 400px;
  height: 80vh;
  background-color: ${c.white};
  margin: 50px auto;
  padding: 68px 36px 0px;
  @media (max-width: 768px) {
    height: 100vh;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  > img {
    display: block;
    width: 50%;
    animation: bounceInDown, tada;
    animation-duration: 1s;
    animation-delay: 0s, 1s;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  gap: 6px 0px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 1px solid ${c.border};
  border-radius: 5px;
  padding-left: 11px;
  ::placeholder {
    font-size: 19.976px;
    line-height: 25px;
    color: ${c.placeholder};
    opacity: 1;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  background-color: ${c.button};
  border-radius: 5px;
  border: none;
  cursor: pointer;

  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
  color: ${c.white};
  :hover {
    opacity: 0.9;
  }
  :active {
    scale: 0.9;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${c.button};
  margin-top: 25px;
  cursor: pointer;
  text-decoration-line: underline;
`;

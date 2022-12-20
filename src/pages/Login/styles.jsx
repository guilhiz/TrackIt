import styled from "styled-components";
import { Link } from "react-router-dom";
import "animate.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 375px;
  max-width: 400px;
  height: 80vh;
  background-color: ${(props) => props.theme.background};
  margin: 50px auto;
  padding: 68px 36px 0px;
  position: relative;
  transition: background-color 0.2s linear;
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
  background-color: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  padding-left: 11px;
  color: ${(props) => props.theme.text};
  transition: all 0.2s linear;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 19.976px;
    line-height: 25px;
    color: ${(props) => props.theme.placeholder};
    opacity: 1;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  background-color: ${(props) => props.theme.button};
  border-radius: 5px;
  border: none;
  cursor: pointer;

  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
  color: ${(props) => props.theme.white};
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
  color: ${(props) => props.theme.button};
  margin-top: 25px;
  cursor: pointer;
  text-decoration-line: underline;
`;

export const ContainerDarkMode = styled.div`
  background-color: red;
  position: absolute;
  top: 2%;
  right: 5%;
  > input {
    position: absolute;
    opacity: 0;
    :checked + label {
      background-color: #242424;
      div {
        transform: translateX(24px);
        background: linear-gradient(180deg, #777, #3a3a3a);
      }
    }
  }
`;

export const LabelDarkMode = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 5px;
  width: 50px;
  height: 26px;
  background: #ebebeb;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  transform: scale(1.5);
  cursor: pointer;

  > div {
    width: 20px;
    height: 20px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: all 0.2s linear;
  }
`;

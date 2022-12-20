import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  height: 70px;
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.title};
  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.p`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 49px;
  color: #ffffff;

  :hover {
    animation: tada;
    animation-duration: 1s;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  :hover div {
    width: 80px;
    background-color: #fff;
  }
`;

export const SignOutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 12px 0px 8px;
  width: 0px;
  background-color: transparent;
  transition: all 300ms ease-in-out;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  cursor: pointer;
  p {
    color: ${props => props.theme.title};
    margin-left: 5px;
  }
`;

export const ProfileImg = styled.img`
  display: block;
  width: 51px;
  border-radius: 50%;
  margin-left: -7px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

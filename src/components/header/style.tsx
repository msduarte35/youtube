// Styled components for the header component

import styled from "styled-components";
// Container for the header
export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 1000;
`;
// Container for the logo and button elements within the header
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
// Container for the button element within the header
export const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
// Icon for the button element within the header

export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

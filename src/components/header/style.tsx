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
  margin: 0 16px 0 0;
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

export const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;
  
export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  display: flex;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  padding: 0 16px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  outline: none;
  
`;
export const SearchButton = styled.div`
  width: 70px;
  height: 35px;
  border: 1px solid #d3d3d3;
  border-radius: 0 40px 40px 0;
  background-color: #f8f8f8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e6e6e6;
  }
`;
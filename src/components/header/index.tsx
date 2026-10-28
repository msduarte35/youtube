import { Container,
     LogoContainer, 
     ButtonContainer,
      ButtonIcon,
      SearchContainer,
      SearchInputContainer,
      SearchInput } from "./style";
import hamburgerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/YouTube-Logo.png";
 

// const ButtonContainer = styled.div`
//   font-size: 1rem;
//   font-weight: normal;
// const LogoContainer = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

function Header() {
  return (
    <div>
      <Container>
        <LogoContainer>
        <ButtonContainer>
        <ButtonIcon alt="Button Icon" src={hamburgerIcon} />
        </ButtonContainer>
        <img
          style={{ cursor: "pointer", width: "40px" }}
          alt="Logo"
          src={Logo}
        />
        </LogoContainer>

        <SearchContainer>
            <SearchInputContainer>
               <SearchInput  placeholder="Pesquisar" />

            </SearchInputContainer>

        </SearchContainer>





      </Container>

    </div>
  )
}
  export default Header;
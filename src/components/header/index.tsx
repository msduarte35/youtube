import { Container,
     LogoContainer, 
     ButtonContainer,
      ButtonIcon,
      SearchContainer,
      SearchInputContainer,
      SearchInput,
      SearchButton } from "./style";
import hamburgerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/YouTube-Logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
 

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
          style={{ cursor: "pointer", width: "100px" }}
          alt="Logo"
          src={Logo}
        />
        </LogoContainer>

        <SearchContainer>
            <SearchInputContainer>
               <SearchInput  placeholder="Pesquisar" />
            </SearchInputContainer>
            <SearchButton>
              <ButtonIcon alt="Search Icon" src={SearchIcon} />
            </SearchButton>

            <ButtonContainer>
              <ButtonIcon alt="Search Icon" src={MicIcon} />
            </ButtonContainer>

        </SearchContainer>





      </Container>

    </div>
  )
}
  export default Header;
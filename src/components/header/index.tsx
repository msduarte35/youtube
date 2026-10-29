import { Container,
     LogoContainer, 
     ButtonContainer,
      ButtonIcon,
      SearchContainer,
      SearchInputContainer,
      SearchInput,
      SearchButton,
     HeaderButton } from "./style";
import hamburgerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/YouTube-Logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import NotificationIcon from "../../assets/sino.png";
import videoIcon from "../../assets/video.png";
 

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
        <ButtonContainer margin="0 16px 0 0">
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

            <ButtonContainer margin = "0 0 0 16px"> 
              <ButtonIcon alt="Search Icon" src={MicIcon} />
            </ButtonContainer>
        </SearchContainer>


        <HeaderButton>
        <ButtonContainer margin="0 0 0 10px">
        <ButtonIcon alt="" src={videoIcon} />
        </ButtonContainer>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={NotificationIcon} />
        </ButtonContainer>
        <ButtonContainer margin="0 0 0 10px">
          M
        </ButtonContainer>


        </HeaderButton>

        </Container>

    </div>
  )
}
  export default Header;
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import darkLogo from '../../assets/dark-logo.png';
import StyledLink from '../../utils/style/link';

const HomeLogo = styled.img`
    height: 70px;
`

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
function Header(){
    return (
        <div>
            <NavContainer>
                <Link to="/">
                    <HomeLogo src={darkLogo} alt="Logo de l'agence Shiny"/>
                </Link>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </NavContainer>
        </div>
    )
}

export default Header;
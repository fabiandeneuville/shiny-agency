import { Link } from 'react-router-dom';
import styled from 'styled-components';
import darkLogo from '../../assets/dark-logo.png';
import lightLogo from '../../assets/light-logo.png';
import StyledLink from '../StyledLink/index';
import { ThemeContext } from '../../utils/context/index';
import { useContext } from 'react';

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

    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <NavContainer>
                <Link to="/">                    
                    <HomeLogo src={theme === 'dark' ? lightLogo : darkLogo} alt="Logo de l'agence Shiny"/>
                </Link>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </NavContainer>
        </div>
    )
}

export default Header;
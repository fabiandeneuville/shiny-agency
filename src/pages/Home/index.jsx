import styled from 'styled-components';
import colors from '../../utils/style/colors';
import homeIllustration from '../../assets/home-illustration.svg';
import StyledLink from '../../components/StyledLink/index';
import { useTheme } from '../../utils/hooks/index';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  margin: 30px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  max-width: 1200px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledTitle = styled.h1`
  padding: 15px;
  max-width: 280px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img`
  flex-shrink: 1;
`

function Home() {

  const { theme } = useTheme()

  return (
    <HomeWrapper>
      <HomeContainer theme={theme}>
        <LeftColumn>
          <StyledTitle theme={theme}>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        </LeftColumn>
        <Illustration src={homeIllustration}/>

      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

import ErrorIllustration from '../../assets/404.svg';
import  styled  from 'styled-components';
import colors from '../../utils/style/colors';

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
    background-color: ${colors.backgroundLight};
`

const ErrorText = styled.p`
    text-align: center;
    padding: 15px;
    font-size: 31px;
`

const Illustration = styled.img`
    max-width: 800px;
`

function Error(){
    return (
        <ErrorWrapper>
            <ErrorText>Oups...</ErrorText>
            <Illustration src={ErrorIllustration} alt="Erreur 404"/>
            <ErrorText>Il semblerait qu'il y ait un problème</ErrorText>
        </ErrorWrapper>
    )
}

export default Error;
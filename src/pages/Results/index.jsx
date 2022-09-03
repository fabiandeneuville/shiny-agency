import {useContext} from 'react';
import {SurveyContext} from '../../utils/context/index';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import StyledLink from '../../components/StyledLink/index';
import Loader from '../../components/Loader/loader'
// import { ThemeContext } from '../../utils/context/index';
import { useFetch, useTheme } from '../../utils/hooks';

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark}
`

const ResultsTitle = styled.h2`
    color: ${({theme}) => theme === 'light' ? '#000000' : '#FFFFFF'};
    font-weight: bold;
    font-size: 28px;
    maw-width: 60%;
    text-align: center;
    & > span {
        padding-left: 10px;
    }
`

const DescriptionWrapper = styled.div`
    padding: 60px;
`

const JobTitle = styled.div`
    color: ${({ theme }) => theme === 'light' ? colors.primary : colors.backgroundLight};
    text-transform: capitalize;
    font-weight: bold;
`

const JobDescription = styled.div`
    font-size: 18px;
    & > p {
        color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
        margin-block-start: 5px;
    }
    & > span {
        font-size: 20px;
    }
`

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export function formatQueryParams(answers){
    const answerNumbers = Object.keys(answers);

    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0;
        const separator = isFirstParam ? '' : '&';
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}

export function formatJobList(title, listLength, index){
    if(index === listLength - 1){
        return title
    }
    return `${title},`
}

function Results(){

    const { theme } = useTheme();
    const { answers } = useContext(SurveyContext);
    const queryParams = formatQueryParams(answers);

    const {data, isLoading, error} = useFetch(
        `http://localhost:8000/results?${queryParams}`
    )

    if(error){
        return <span>Il y a eu un problème</span>
    }

    const resultsData = data.resultsData;

    return isLoading ?(
        <LoaderWrapper data-testid='loader'>
            <Loader/>
        </LoaderWrapper>
    ) : (
        <ResultsContainer theme={theme}>
            {<ResultsTitle theme={theme}>
                Les compétences dont vous avez besoin :
                { resultsData &&
                    resultsData.map((result, index) => {
                    return (
                        <JobTitle 
                        key={`result-title-${index}-${result.title}`}
                        theme={theme}
                        data-testid='job-title'
                        >
                        {formatJobList(result.title, resultsData, index)}
                        </JobTitle>
                    )
                })}
            </ResultsTitle>}
            <StyledLink $isFullLink to="/freelances">
                Découvrez nos profiles
            </StyledLink>
            <DescriptionWrapper>
                {resultsData && 
                    resultsData.map((result, index) => {
                        return (
                            <JobDescription
                            theme={theme}
                            key={`result-detail-${index}-${result.title}`}
                            data-testid='job-description'
                            >
                            <JobTitle theme={theme}>{result.title}</JobTitle>
                            <p>{result.description}</p>
                            </JobDescription>
                        )
                    })
                }
            </DescriptionWrapper>
        </ResultsContainer>
    )
}

export default Results;
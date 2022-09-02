import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Loader from '../../components/Loader/loader';
import { SurveyContext } from '../../utils/context';
import { useContext } from 'react';
import { useFetch , useTheme } from '../../utils/hooks';


const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const SurveyTitle = styled.h1`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')}
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')};
`

const QuestionContent = styled.span`
    margin: 30px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')}
`

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: ${({ theme }) => (theme === 'light' ? '#000000' : '#FFFFFF')}
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`

const ErrorMessage = styled.p`
    padding: 20px;
    color: crimson;
    text-align: center
`

const ReplyBox = styled.button`
    border: none;
    height: 100px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    border-radius: 30px;
    cursor: pointer;
    box-shadow: ${(props) =>
        props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
    &:first-child {
        margin-right: 15px;
    }
    &:last-of-type {
        margin-left: 15px;
    } 
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey(){
    const { theme } = useTheme();
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber); 
    const previousQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
    // const [surveyData, setSurveyData] = useState({});
    // const [isDataLoading, setDataLoading] = useState(false);
    const {answers, saveAnswers} = useContext(SurveyContext)
    // const [error, setError] = useState(false);

    // useEffect(() => {
    //     setDataLoading(true)
    //     fetch(`http://localhost:8000/survey`)
    //         .then((response) => response.json()
    //         .then(({surveyData}) => {
    //             setSurveyData(surveyData);
    //             setDataLoading(false)
    //         })
    //         .catch((error) => console.log(error)))
    // }, []);

    function saveReply(answer){
        saveAnswers({[questionNumber] : answer})
    }

    // useEffect(() => {
    //     async function fetchSurvey(){
    //         setDataLoading(true)
    //         try {
    //             const response = await fetch(`http://localhost:8000/survey`)
    //             const { surveyData } = await response.json()
    //             setSurveyData(surveyData)
    //         }
    //         catch(error) {
    //             console.log(error);
    //             setError(true)
    //         }
    //         finally {
    //             setDataLoading(false)
    //         }
    //     }
    //     fetchSurvey()
    // }, [])

    const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);

    const { surveyData } = data;

    if(error){
        return (
            <ErrorMessage>Oups, il semble y avoir un problème.</ErrorMessage>
        )
    }

    return (
        <SurveyContainer>
            <SurveyTitle theme={theme}>Questionnaire</SurveyTitle>
            <QuestionTitle theme={theme}>Question numéro {questionNumber}</QuestionTitle>
            {isLoading ? (
                <Loader/>
            ) : (
                <QuestionContent theme={theme}>{ surveyData && surveyData[questionNumber]}</QuestionContent>
            )}

            <ReplyWrapper>
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                    theme={theme}
                    >
                    OUI
                </ReplyBox>
                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                    theme={theme}
                    >NON</ReplyBox>
            </ReplyWrapper>

            <LinkWrapper theme={theme}>
                <Link to={`/survey/${previousQuestionNumber}`}>Question précédente</Link>
                {questionNumberInt === 6 ? (
                    <Link to={'/results'}>Voir les résultats</Link>
                ) : (
                    <Link to={`/survey/${nextQuestionNumber}`}>Question suivante</Link>
                )}      
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey;
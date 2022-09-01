import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import Loader from '../../components/Loader/loader';

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
    margin: 30px;
`

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
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

function Survey(){

    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber); 
    const previousQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
    const [surveyData, setSurveyData] = useState({});
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(false);

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

    useEffect(() => {
        async function fetchSurvey(){
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/survey`)
                const { surveyData } = await response.json()
                setSurveyData(surveyData)
            }
            catch(error) {
                console.log(error);
                setError(true)
            }
            finally {
                setDataLoading(false)
            }
        }
        fetchSurvey()
    }, [])

    if(error){
        return (
            <ErrorMessage>Oups, il semble y avoir un problème.</ErrorMessage>
        )
    }

    return (
        <SurveyContainer>
            <h1>Questionnaire</h1>
            <QuestionTitle>Question numéro {questionNumber}</QuestionTitle>
            {isDataLoading ? (
                <Loader/>
            ) : (
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
            )}
            <LinkWrapper>
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
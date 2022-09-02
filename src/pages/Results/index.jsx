import {useContext} from 'react';
import {SurveyContext} from '../../utils/context/index';


function Results(){

    const { answers } = useContext(SurveyContext)
    console.log(answers)

    return (
        <h1>Results</h1>
    )
}

export default Results;
import Card from '../../components/Card';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/loader';

// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'Devops',
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Developpeur frontend',
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Developpeuse Fullstack',
//     }
// ]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`

const PageTitle = styled.h1`
    font-size: 30px;
    text-align: center;
    color: black;
    padding-bottom: 30px;
`

const PageSubTitle = styled.h2`
    font-size: 20px;
    text-align: center;
    color: #8186A0;
    padding-bottom: 30px;
`

const ErrorMessage = styled.p`
    padding: 20px;
    color: crimson;
    text-align: center
`

function Freelances(){

    const [freelanceProfiles, setFreelanceProfiles] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     setDataLoading(true);
    //     fetch('http://localhost:8000/freelances')
    //     .then((response) => response.json()
    //     .then(({freelancersList}) => {
    //         setFreelanceProfiles(freelancersList)
    //         setDataLoading(false);
    //     }))
    //     .catch((error) => console.log(error))
    // }, [])

    useEffect(() => {
        async function fetchProfiles(){
            setDataLoading(true)
            try {
                const response = await fetch('http://localhost:8000/freelances');
                const { freelancersList } = await response.json();
                setFreelanceProfiles(freelancersList);
            }
            catch(error) {
                console.log(error);
                setError(true);
            }
            finally {
                setDataLoading(false);
            }
        }
        fetchProfiles()
    }, [])

    if(error){
        return (
            <ErrorMessage>Oups, il semble y avoir un problème.</ErrorMessage>
        )
    }

    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>

            <PageSubTitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubTitle>

            {isDataLoading ? (
                <Loader/>
            ) : (
                <CardsContainer>
                    {freelanceProfiles.map((profile, index) => {
                        return (
                            <Card
                                key={profile.id}
                                label={profile.job}
                                title={profile.name}
                                picture={profile.picture}
                            />
                        )
                    })}
                </CardsContainer>
            )}

        </div>
    )
}

export default Freelances;
import Card from '../../components/Card';
import styled from 'styled-components';

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Developpeuse Fullstack',
    }
]

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

function Freelances(){
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>

            <PageSubTitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubTitle>

            <CardsContainer>
                {freelanceProfiles.map((profile, index) => {
                    return (
                        <Card
                            key={`${profile.name} - ${index}`}
                            label={profile.jobTitle}
                            title={profile.name}
                        />
                    )
                })}
            </CardsContainer>
        </div>
    )
}

export default Freelances;
import Card from '../../components/Card';

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

function Freelances(){
    return (
        <div>
            <h1>Freelances 👩🏻‍🦳 💻 👨🏽 💻 👩🏿‍🦱 💻</h1>
            {freelanceProfiles.map((profile, index) => {
                return (
                    <Card
                        key={`${profile.name} - ${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                )
            })}
        </div>
    )
}

export default Freelances;
import propTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-wight: bold;
    padding-left: 15px;
`
const CardImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    align-self: center;
`

const CardTitle = styled.span`
    font-size: 25px;
    align-self: center;
`

const CardWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 300px;
    height: 300px;
    transition: 0.2s;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #E2E3E9;
    }
`

function Card({ label, title, picture }){
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    picture: propTypes.string.isRequired
}

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture
}

export default Card;
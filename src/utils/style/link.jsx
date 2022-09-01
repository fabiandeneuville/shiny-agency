import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/color';

const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 20px;
    text-align: center;
    transition: all 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }
    ${(props) => 
        props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary}`}
`

export default StyledLink;
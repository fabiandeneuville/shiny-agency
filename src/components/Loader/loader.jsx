import styled, { keyframes } from 'styled-components';
import colors from '../../utils/style/color';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`

const Loader = styled.div`
    margin: 10px auto;
    paddin: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 25px;
    width: 25px;
`

export default Loader;
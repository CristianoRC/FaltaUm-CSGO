import styled from 'styled-components'
import BackgroundImg from './../../images/backgroundLogin.png'

const fontSizePrimary = '16px'
const width = '250px'

export const MainLogin = styled.main`
    display: flex;
    justify-content: flex-end;
    background: url(${BackgroundImg}) no-repeat center center fixed;
`

export const ScreenLogin = styled.div`
    background: #1C1C1C;
    width: 400px;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const GroupDivs = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputLogin = styled.input`
    width: ${width};
    border: #9e958c solid 2px;
    border-radius: 2px;
    font-size: ${fontSizePrimary};
    padding: 5px;
    margin: 15px;

    :hover, :focus {
        border: #f0640e solid 2px;
    }
`

export const Button = styled.button`
    width: ${width};
    padding: 8px;
    font-size: ${fontSizePrimary};
    color: #D8D8D8;
    background: ${props => props.background === '1' ? '#f37020' : '#1c1c1c'};
    border: none;
    margin: 7.5px;

    :hover {
        cursor: pointer;
        background: ${props => props.background === '1' ? '#f0640e' : '#2E2E2E'};
    }
`
export const TitleLogin = styled.h1`
    font-family: fantasy;
    color: #f0640e;
    padding: 20px;
`
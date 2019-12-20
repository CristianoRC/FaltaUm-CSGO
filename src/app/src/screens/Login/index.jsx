import React, {useState} from 'react'
import {MainLogin, ScreenLogin, TitleLogin, InputLogin, Button, GroupDivs, Img} from './styled'
import BackImg from './../../images/back.png'
import {Redirect} from 'react-router-dom'

export default () => {
    const [isHome, setIsHome] = useState(false)
    const [isRegister, setIsRegister] = useState(false)

    document.title = 'FaltaUM | Login'

    if(isHome) {
        return <Redirect to='/' />
    }

    if(isRegister) {
        return <Redirect to='/register' />
    }

    return (
        <MainLogin>
            <Img src={BackImg} alt='img' onClick={() => setIsHome(true)} />

            <ScreenLogin>
                <TitleLogin>Indetifique-se</TitleLogin>

                <GroupDivs>
                    <InputLogin type='email' placeholder='E-mail' autoFocus />
                    <InputLogin type='password' placeholder='Senha' />
                </GroupDivs>

                <GroupDivs>
                    <Button background='1'>Entrar</Button>
                    <Button onClick={() => setIsRegister(true)}>Cadastrar-se</Button>
                </GroupDivs>
            </ScreenLogin>
        </MainLogin>
    )
}
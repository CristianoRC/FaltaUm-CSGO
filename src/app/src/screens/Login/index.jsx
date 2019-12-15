import React from 'react'
import {MainLogin, ScreenLogin, TitleLogin, InputLogin, Button, GroupDivs} from './styled'

export default () => {
    document.title = 'FaltaUM | Login'

    return (
        <MainLogin>
            <ScreenLogin>
                <TitleLogin>Indetifique-se</TitleLogin>

                <GroupDivs>
                    <InputLogin type='email' placeholder='E-mail' autoFocus />
                    <InputLogin type='password' placeholder='Senha' />
                </GroupDivs>

                <GroupDivs>
                    <Button background='1'>Entrar</Button>
                    <Button>Cadastrar-se</Button>
                </GroupDivs>
            </ScreenLogin>
        </MainLogin>
    )
}
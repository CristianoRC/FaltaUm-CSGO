import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

export default () => {
    const [isLogin, setIsLogin] = useState(false)
    
    if(isLogin) {
        return <Redirect to='login' />
    }

    return (
        <div>
            <h1>Tela de registro</h1>
            <button onClick={() => setIsLogin(true)}>Login</button>
        </div>
    )
}
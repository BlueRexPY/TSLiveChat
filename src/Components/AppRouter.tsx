import React from 'react'
import {Route, Routes, useNavigate } from "react-router-dom";
import Chat from './Chat';
import Login from './Login';
import { privatRouts, publicRouts } from './routs';
import { useEffect } from 'react';
type Props = {
    login:boolean
}

const AppRouter = (props: Props) => {
    const login = props.login
    const navigate = useNavigate()
    useEffect(() => {
        login?(navigate("/chat")):(navigate("/login"))
    }, [login])
    

    return login?
    (
        <Routes>
            <Route path="/">
                <Route index element={<Chat/>}/>
                {privatRouts.map(({path,Component}, key)=>
                    <Route path={path} key={key} element={<Component/>}/>
                )}  
            </Route>  
        </Routes>
    )
    :
    (
        <Routes>
            
            <Route path="/">
                <Route index element={<Login/>}/>
                {publicRouts.map(({path,Component},key)=>
                    <Route path={path} key={key} element={<Component/>}/>
                )}
            </Route> 
        
        </Routes>
    )
}

export default AppRouter
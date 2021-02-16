import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home'
import Pegawai from './pegawai'
import Login from './login'
import Register from './register'

const Pages = () => (
    <Switch>
        <Route path='/pegawai' component={Pegawai} />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />

    </Switch>
)

export default Pages

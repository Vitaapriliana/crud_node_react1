import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home'
import Pegawai from './pegawai'
import Login from './login'
import Register from './register'
import Pelanggaran from './pelanggaran'
import Murid from './murid'

const Pages = () => (
    <Switch>
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/murid' component={Murid} />
        <Route path='/pelanggaran' component={Pelanggaran} />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />

    </Switch>
)

export default Pages

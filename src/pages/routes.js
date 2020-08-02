import React from 'react';
import Splash from './splash';
import Home from './home';
import Toon from './toon';

export const routes = [
    { path: '/Splash', component: <Splash /> },
    { path: '/Home', component: <Home /> },
    { path: '/Toon/:archetype/:build', component: <Toon /> }
];
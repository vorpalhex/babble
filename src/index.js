'use strict';

const root = document.getElementById('main-content');
import landing from './ui/landing.jsx';
import m from 'mithril';

//setup our router
m.route(root, '/landing', {
  '/landing': landing,
});

'use strict';

const root = document.getElementById('main-content');
import m from 'mithril';
//load our story
import * as storyManager from './lib/storyManager';
storyManager.load();

//load our pages
import gamescreen from './ui/pages/gamescreen.jsx';
import loadscreen from './ui/pages/loadscreen.jsx';

//setup our router
m.route(root, '/load', {
  '/load': loadscreen,
  '/play': gamescreen,
});

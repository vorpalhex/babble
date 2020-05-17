'use strict';

import * as parser from './passageParser';
import rawStory from '../story.json';
import defaults from '../defaults.json';

const passages = [];
const passageMap = {};
let meta = {};
let nextPassage = 1;

export function load() {
  meta = rawStory._meta;
  nextPassage = meta.startnode ? meta.startnode : 1;

  rawStory.passages.forEach((passage) => {
    passageMap[passage.name] = passage.pid;
    passages[passage.pid] = passage;
  });
}

export function loadPassage(passageName) {
  const passageIndex = passageMap[passageName];
  if (!passageIndex) throw new Error('Invalid scene selection');
  nextPassage = passageIndex;
}

export function getPassage() {
  const passage = passages[nextPassage];
  return parser.parse(passage);
}

export function getTitle() {
  return meta.name || 'Unnamed Story';
}

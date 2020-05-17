/* @jsx m */
import m from 'mithril';

import DrawerUI from '../components/drawer.jsx';
import HeaderUI from '../components/header.jsx';
import Message from '../components/message.jsx';

import * as storyManager from '../../lib/storyManager';

export default function LandingUI() {
  return {
    view: () => {
      return (
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
            <HeaderUI title={storyManager.getTitle()} />
            <DrawerUI />
            <main class="mdl-layout__content">
              <div class="" >{m.fragment(m.trust(storyManager.getPassage().html))}</div>
            </main>
        </div>
      );
    }
  }
}

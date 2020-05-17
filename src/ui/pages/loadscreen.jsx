/* @jsx m */
import m from 'mithril';

import DrawerUI from '../components/drawer.jsx';
import HeaderUI from '../components/header.jsx';

import * as storyManager from '../../lib/storyManager';

export default function LandingUI() {
  return {
    view: () => {
      return (
        <div class="mdl-layout mdl-js-layout
            mdl-layout--fixed-header">
            <HeaderUI title={storyManager.getTitle()} />
            <main class="mdl-layout__content">
              <div><m.route.Link href="/play">Play</m.route.Link></div>
            </main>
        </div>
      );
    }
  }
}

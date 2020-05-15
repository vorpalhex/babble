/* @jsx m */
import m from 'mithril';

import DrawerUI from './drawer.jsx';
import HeaderUI from './header.jsx'

export default function LandingUI() {
  return {
    view: () => {
      return (
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
            <HeaderUI title="Landing" />
            <DrawerUI />
            <main class="mdl-layout__content">
              <div class="main-content">Hello World</div>
            </main>
        </div>
      );
    }
  }
}

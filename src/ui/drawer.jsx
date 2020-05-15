/* @jsx m */
import m from 'mithril';

export default function DrawerUI() {
  return {
    view: () => {
      return (<div class="mdl-layout__drawer">
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Play</a>
        <a class="mdl-navigation__link" href="">Load</a>
        <a class="mdl-navigation__link" href="">Save</a>
        <a class="mdl-navigation__link" href="">Preferences</a>
      </nav>
    </div>);
    }
  }
}

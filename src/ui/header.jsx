/* @jsx m */
import m from 'mithril';

export default function HeaderUI() {
  return {
    view: (vnode) => {
      return (<header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">{vnode.attrs.title}</span>
        <div class="mdl-layout-spacer"></div>
      </div>
    </header>);
    }
  }
}

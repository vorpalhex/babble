/* @jsx m */
import m from 'mithril';

export default function Message() {
  return {
    view: (vnode) => {
      return (
      <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__supporting-text">
          {vnode.children}
        </div>
      </div>
      );
    },
    onupdate: (vnode) => {
      componentHandler.upgradeElement(vnode.dom);
    }
  }
}

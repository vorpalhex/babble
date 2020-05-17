const {
  utils: { escapeHtml },
} = require('remarkable');

function wikilinkRule(state, silent) {
  //place tokens
  const { pos: start, src, posMax } = state;
  const ch = src.charCodeAt(start);
  //make sure we start with an open bracket
  if (ch !== 0x5b /* [ */) return false;
  //at least four characters to be valid
  if (start + 4 >= posMax) return false;
  //start with double [[
  if (src.charCodeAt(start + 1) !== 0x5b) return false;

  //contents
  const labelStart = start + 2;
  let labelEnd = start + 2;
  let hasAlias = false;
  let aliasPos = -1;
  state.pos = start + 2;
  let found = false;
  while (state.pos + 1 < posMax) {
    console.log(src, src.charCodeAt(state.pos), state.pos, posMax);
    if (src.charCodeAt(state.pos) === 0x7c /* | */) {
      hasAlias = true;
      aliasPos = state.pos;
    }
    //go through until we have a double ]]
    if (src.charCodeAt(state.pos) === 0x5d /* ] */) {
      if (src.charCodeAt(state.pos + 1) === 0x5d /* ] */) {
        labelEnd = state.pos;
        found = true;
        break;
      }
    }
    state.pos++;
  }

  //if we never have a closing bracket, we didn't find an entry
  if (!found) {
    state.pos = start;
    return false;
  }
  //prepare for descent
  console.log('Has alias', hasAlias);
  state.posMax = state.pos; //end of descent
  state.pos = hasAlias ? aliasPos + 1 : start + 2; //start of descent - only descend on the alias if it exists
  const hrefEnd = hasAlias ? aliasPos - 1 : labelEnd;
  if (!silent) {
    state.push({
      type: 'wikilink_open',
      href: src.substring(labelStart, hrefEnd),
      level: state.level++,
    });
    state.linkLevel++;
    state.parser.tokenize(state);
    state.linkLevel--;
    state.push({ type: 'wikilink_close', level: --state.level });
  }

  state.pos = state.posMax + 2;
  state.posMax = posMax;
  return true;
}

const wikilink_open = function (tokens, idx, options /*, env */) {
  return `<a href="${escapeHtml(
    encodeURIComponent(tokens[idx].href.trim())
  )}" class="wikilink">`;
};
const wikilink_close = function (/* tokens, idx, options, env */) {
  return '</a>';
};

export default function wikilink(md, opts) {
  md.inline.ruler.push('wikilink', wikilinkRule);
  md.renderer.rules.wikilink_open = wikilink_open;
  md.renderer.rules.wikilink_close = wikilink_close;
}

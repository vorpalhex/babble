export default function paragraph(md, opts) {
  md.renderer.rules.paragraph_open = paragraph_open;
  md.renderer.rules.paragraph_close = paragraph_close;
}

const paragraph_open = function (tokens, idx, options /*, env */) {
  return `<Message>`;
};
const paragraph_close = function (/* tokens, idx, options, env */) {
  return '</Message>';
};

import { Remarkable } from 'remarkable';
import passageLink from './parsing/passagelink';
import paragraph from './parsing/paragraph';

const md = new Remarkable({
  html: true,
  breaks: true,
  typographer: true,
});

md.use(passageLink);
md.use(paragraph);

export function parse(passage) {
  passage.html = md.render(passage.contents);
  return passage;
}

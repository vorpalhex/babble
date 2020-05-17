import { Remarkable } from 'remarkable';
import passageLink from './parsing/passagelink';
const md = new Remarkable({
  html: true,
  breaks: true,
  typographer: true,
});

md.use(passageLink);

export function parse(passage) {
  passage.html = md.render(passage.contents);
  return passage;
}

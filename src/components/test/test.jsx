import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Test(block) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: md.render(block.title),
      }}
    ></div>
  );
}

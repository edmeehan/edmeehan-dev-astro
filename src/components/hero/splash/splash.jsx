import MarkdownIt from 'markdown-it';
import Section from '@components/layout/section.astro'
const md = new MarkdownIt({ html: true });

export default function HeroSplash(block) {
  return (
    <Section {...block.section}>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(block.title),
        }}
      ></div>
    </Section>
  );
}
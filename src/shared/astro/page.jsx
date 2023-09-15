const components = {};
const componentImports = import.meta.glob('../../components/**/*.jsx', {
  eager: true,
});

Object.entries(componentImports).forEach(([path, obj]) => {
  const parts = path.replace('../../components/', '').split('.')[0].split('/');
  if (parts.length > 1 && parts[parts.length - 1] === parts[parts.length - 2]) {
    parts.pop();
  }
  const bookshopName = parts.join('/');
  components[bookshopName] = obj.default;
});

export default function Page({ contentBlocks }) {
  return (
    <main>
      {contentBlocks.map((block, i) => {
        const Component = components[block._bookshop_name];
        // updated block model with data related to next and previous block sections
        const blockModel = {
          ...block,
          section: {
            ...block.section,
            is_first: i === 0,
            is_last: contentBlocks.length === i + 1,
            index: i,
            prev: contentBlocks[i - 1]?.section,
            next: contentBlocks[i + 1]?.section,
          }
        };
        return <Component {...blockModel} key={i} />;
      })}
    </main>
  );
}

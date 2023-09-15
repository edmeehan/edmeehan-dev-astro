export default function Page(blocks, componentImports, uri = '../components/') {
  const components = {};

  Object.entries(componentImports).forEach(([path, obj]) => {
    const parts = path.replace(uri, '').split('.')[0].split('/');
    if (
      parts.length > 1 &&
      parts[parts.length - 1] === parts[parts.length - 2]
    ) {
      parts.pop();
    }
    const bookshopName = parts.join('/');
    components[bookshopName] = obj.default;
  });

  return [
    components,
    function (block, index) {
      return {
        ...block,
        section: {
          ...block.section,
          is_first: index === 0,
          is_last: blocks.length === index + 1,
          index,
          prev: blocks[index - 1]?.section,
          next: blocks[index + 1]?.section,
        },
      };
    },
  ];
}

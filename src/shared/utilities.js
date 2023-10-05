export const dateFormatter = (short = false) => new Intl.DateTimeFormat("en-US", short ? {
  month: "long",
  year: "numeric",
} : {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export const imgix = (image_path, width, dpr, height = null) => {
  let transformations = `q=85&auto=format&w=${width}&dpr=${dpr}`;
  if (height !== null) {
    transformations += `&crop=faces&fit=crop&height=${height}`;
  }
  return `https://edmeehan-dev.imgix.net${image_path}?${transformations}`;
};

export const imgix_article_card = (image_path, width) => `https://edmeehan-dev.imgix.net${image_path}?q=85&ar=2:1&fit=crop&crop=center,left&w=${width}`;
export const imgix_article_default = (image_path, width) => `https://edmeehan-dev.imgix.net${image_path}?q=85&&w=${width}`;
export const imgix_article_mobile = (image_path, width) => `https://edmeehan-dev.imgix.net${image_path}?q=85&ar=639:500&fit=crop&crop=center,left&w=${width}`;
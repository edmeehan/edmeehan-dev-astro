const is_dev = import.meta?.env?.IS_DEVELOPMENT || false;

export const dateFormatter = (short = false) => new Intl.DateTimeFormat("en-US", short ? {
  month: "long",
  year: "numeric",
} : {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export const imgix = (image_path, width, dpr = 1, height = null) => {
  let transformations = `q=85&auto=format&w=${width}&dpr=${dpr}`;
  if (height !== null) {
    transformations += `&crop=faces&fit=crop&height=${height}`;
  }
  return is_dev ? image_path : `https://edmeehan-dev.imgix.net${image_path}?${transformations}`;
};

export const imgix_article_card = (image_path, width) => is_dev ? image_path : `https://edmeehan-dev.imgix.net${image_path}?q=85&ar=2:1&fit=crop&crop=center,left&w=${width}`;
export const imgix_article_default = (image_path, width) => is_dev ? image_path : `https://edmeehan-dev.imgix.net${image_path}?q=85&ar=333:125&fit=crop&crop=center,center&w=${width}`;
export const imgix_article_mobile = (image_path, width) => is_dev ? image_path : `https://edmeehan-dev.imgix.net${image_path}?q=85&ar=639:500&fit=crop&crop=center,left&w=${width}`;
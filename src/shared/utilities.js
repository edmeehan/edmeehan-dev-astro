const is_dev = import.meta?.env?.DEV || true; // true by default so it works in CloudCannon

export const dateFormatter = (short = false) => new Intl.DateTimeFormat("en-US", short ? {
  month: "long",
  year: "numeric",
} : {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export const create_post_image = (img_path) => {
  return img_path ? [
    [
      [300,500,653,1000,1306].map(item => `${imgix_article_mobile(img_path, item)} ${item}w`).join(','),
      [800,950,1106,1172,2212,2344].map(item => `${imgix_article_default(img_path, item)} ${item}w`).join(',')
    ],
    [
      '(max-width: 590px) 95vw, 653px',
      '(max-width: 1600px) 73vw,(max-width: 2559px) 1106px, 1172px'
    ]
  ] : [false,false];
}

export const imgix = (image_path, width, dpr = 1, height = null) => {
  let transformations = `q=85&auto=format&w=${width}&dpr=${dpr}`;
  if (height !== null) {
    transformations += `&crop=faces&fit=crop&height=${height}`;
  }
  return is_dev ? image_path : `https://edmeehan-dev.imgix.net${image_path}?${transformations}`;
};

export const imgix_article_card = (image_path, width) => is_dev ? image_path : `https://edmeehan-dev.imgix.net${image_path}?q=85&auto=format&ar=2:1&fit=crop&crop=center,left&w=${width}`;
export const imgix_article_default = (image_path, width) => is_dev ? image_path : `https://edmeehan-dev.imgix.net${image_path}?q=85&auto=format&ar=333:125&fit=crop&crop=center,center&w=${width}`;
export const imgix_article_mobile = (image_path, width) => is_dev ? image_path : `https://edmeehan-dev.imgix.net${image_path}?q=85&auto=format&ar=639:500&fit=crop&crop=center,left&w=${width}`;
export const imgix_og = (image_path, width, height) => is_dev ? image_path : `https://edmeehan-dev.imgix.net${image_path}?q=85&auto=format&w=${width}&h=${height}&fit=crop&crop=center,left`;
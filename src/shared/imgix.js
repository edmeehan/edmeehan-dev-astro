export default function (image_path, width, dpr, height = null) {
  let transformations = `q=85&auto=format&w=${width}&dpr=${dpr}`;
  if (height !== null) {
    transformations += `&crop=faces&fit=crop&height=${height}`;
  }
  return `https://edmeehan-dev.imgix.net${image_path}?${transformations}`;
};
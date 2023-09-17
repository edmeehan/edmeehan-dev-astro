import { sequence } from 'astro:middleware';

async function imgix(_, next) {
  const response = await next();
  const html = await response.text();
  console.log('validation response', html);
  return response;
}

export const onRequest = sequence(imgix);

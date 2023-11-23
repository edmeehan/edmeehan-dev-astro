import { sequence } from 'astro:middleware';
import { getCollection } from "astro:content";

async function collections(_, next) {
  const blog = await getCollection('blog');
  const project = await getCollection('projects');
  _.locals.collections = {
    blog,
    project
  };
  return next();
}

// async function imgix(_, next) {
//   const response = await next();
//   const html = await response.text();
//   console.log('validation response', html);
//   return new Response(html, {
//     status: 200,
//     headers: response.headers,
//   });
// }

export const onRequest = sequence(collections);
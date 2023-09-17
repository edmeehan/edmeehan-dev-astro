import { sequence } from 'astro:middleware';

// async function imgix(_, next) {
//   const response = await next();
//   const html = await response.text();
//   console.log('validation response', html);
//   return new Response(html, {
//     status: 200,
//     headers: response.headers,
//   });
// }

// export const onRequest = sequence(imgix);

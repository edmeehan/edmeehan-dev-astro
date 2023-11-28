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

export const onRequest = sequence(collections);
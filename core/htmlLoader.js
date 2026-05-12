const cache = new Map();

export async function loadHTML(path) {
  if (cache.has(path)) return cache.get(path);

  const html = await fetch(path).then((r) => r.text());
  cache.set(path, html);

  return html;
}

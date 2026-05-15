import { loadHTML } from "./htmlLoader.js";

export async function loadComponent({ name, selector, path, props = {} }) {
  const containerList = document.querySelectorAll(selector);

  const html = await loadHTML(`../${path}/${name}.html`);
  const cssPath = `${path}/${name}.css`;
  const jsModule = await import(`../${path}/${name}.js`);

  for (const container of containerList) {
    container.innerHTML = html;

    if (!document.querySelector(`link[href="${cssPath}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssPath;
      document.head.appendChild(link);
    }

    if (jsModule.default) {
      const instance = new jsModule.default(container, props);
      if (instance.init) await instance.init();
    }
  }
}

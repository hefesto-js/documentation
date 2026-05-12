import { loadComponent } from "/core/componentLoader.js";
import { renderDocs } from "/core/renderDocs.js";

const navConfig = [
  {
    title: "Getting Started",
    items: [
      {
        name: "Introduction",
        link: "#intro",
        content: "<p>Welcome to the docs</p>",
      },
      {
        name: "Installation",
        link: "#install",
        content: "<p>How to install</p>",
      },
    ],
  },
];

loadComponent({
  name: "navbar",
  selector: "#navbar",
  path: "/components/navbar",
  props: { nav: navConfig },
});

renderDocs("#content", navConfig);

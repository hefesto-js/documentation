import { loadComponent } from "./core/componentLoader.js";
import { renderDocs } from "./core/renderDocs.js";

const navConfig = [
  {
    title: "Getting Started",
    items: [
      {
        name: "Introduction",
        link: "#intro",
        content: "<p>Introduction</p>",
      },
      {
        name: "Installation",
        link: "#install",
        content: "<p>Installation</p>",
      },
    ],
  },
  {
    title: "Forge",
    items: [
      {
        name: "startGame()",
        link: "#startgame",
        content: `
        <p>To start a new game, you need to import the startGame() function and use it.</p>
        <p>You will use the game instance for everything.</p>
        <pre>
          <code class="language-js">
            import { startGame } from "./hefesto-js";
            
            // Select your game canvas. (It's not necessary to set width or height in your canvas)
            const canvas = document.getElementById("game");

            // startGame(canvas: HTMLElement, options?: { w: number, h: number, resizeTo: HTMLElement | Window })
            // for fullscreen: 'resizeTo: window'.
            const game = await startGame(canvas, { resizeTo: window });
          </code>
        </pre>
        `,
      },
      {
        name: "createScene()",
        link: "#createscene",
        content: `
        <p>The engine is based on scenes, so you must create at least 1. Every scene can be activated, paused, hidden.</p>
        <pre>
          <code class="language-js">
            const scene = game.createScene();
          </code>
        </pre>
        `,
      },
      {
        name: "createEntity()",
        link: "#createentity",
        content: `
        <p>Everything that appears on the screen is an entity, you can use the entity components to configurate it.</p>
        <pre>
          <code class="language-js">
            // game.createEntity(...components);
            const entity = game.createEntity();

            //the create entity accepts components as parameters:
            const player = game.createEntity(game.physics(), game.pos(0, 100), game.tags("player"));
          </code>
        </pre>
        `,
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        name: "pos()",
        link: "#component-pos",
        content: `<pre><code class="language-js">game.pos(x: number, y: number)</code></pre>`,
      },
      {
        name: "size()",
        link: "#component-size",
        content: `<pre><code class="language-js">game.size(w: number, h: number)</code></pre>`,
      },
      {
        name: "color()",
        link: "#component-color",
        content: `<pre><code class="language-js">game.color(color: string)</code></pre>`,
      },
      {
        name: "solid()",
        link: "#component-solid",
        content: `
        <pre>
          <code class="language-js">
            // This component makes the entity static and enables collision.
            game.solid()
          </code>
        </pre>
        `,
      },
      {
        name: "physics()",
        link: "#component-physics",
        content: `
        <pre>
          <code class="language-js">
            // This component makes the entity not static, enables gravity, enables collision and activate drag.
            game.physics()
          </code>
        </pre>
        `,
      },
      {
        name: "anchor()",
        link: "#component-anchor",
        content: `<pre><code class="language-js">game.anchor(x?: number = 0.5, y?: number = 1)</code></pre>`,
      },
      {
        name: "rect()",
        link: "#component-rect",
        content: `<pre><code class="language-js">game.rect()</code></pre>`,
      },
      {
        name: "text()",
        link: "#component-text",
        content: `<pre><code class="language-js">game.text(text?: string, options?: { fontSize: number })</code></pre>`,
      },
      {
        name: "tags()",
        link: "#component-tags",
        content: `<pre><code class="language-js">game.tags(...tagList: string[])</code></pre>`,
      },
      {
        name: "fixed()",
        link: "#component-fixed",
        content: `<pre><code class="language-js">game.fixed(fixed?: boolean)</code></pre>`,
      },
      {
        name: "debug()",
        link: "#component-debug",
        content: `<pre><code class="language-js">game.debug(debug: boolean)</code></pre>`,
      },
    ],
  },
];

loadComponent({
  name: "navbar",
  selector: "#navbar",
  path: "components/navbar",
  props: { nav: navConfig },
});

renderDocs("#content", navConfig);

Prism.plugins.NormalizeWhitespace.setDefaults({
  trim: true,
  removeIndent: true,
});

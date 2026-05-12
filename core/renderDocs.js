export function renderDocs(containerSelector, nav) {
  const container = document.querySelector(containerSelector);

  if (!container) return;

  container.innerHTML = "";

  nav.forEach((section) => {
    section.items.forEach((item) => {
      if (!item.content) return;

      const id = item.link.replace("#", "");

      const sectionEl = document.createElement("section");
      sectionEl.id = id;

      sectionEl.innerHTML = `
        <h1>${item.name}</h1>
        ${item.content}
      `;

      container.appendChild(sectionEl);
    });
  });
}

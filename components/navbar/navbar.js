export default class Navbar {
  constructor(container, props) {
    this.container = container;
    this.nav = props.nav || [];
  }

  async init() {
    this.sectionsContainer = this.container.querySelector(".sections");
    this.searchInput = this.container.querySelector(".search-input");

    this.render();
    this.initSearch();
  }

  render() {
    this.sectionsContainer.innerHTML = "";

    this.nav.forEach((section) => {
      const sectionEl = document.createElement("div");

      sectionEl.innerHTML = `
        <h4>${section.title}</h4>
        ${section.items
          .map(
            (item) => `
          <a href="${item.link}" class="nav-link">${item.name}</a>
        `,
          )
          .join("")}
      `;

      this.sectionsContainer.appendChild(sectionEl);
    });
  }

  initSearch() {
    this.searchInput.addEventListener("input", () => {
      const value = this.searchInput.value.toLowerCase();

      this.container.querySelectorAll(".nav-link").forEach((link) => {
        const match = link.textContent.toLowerCase().includes(value);
        link.style.display = match ? "block" : "none";
      });
    });
  }
}

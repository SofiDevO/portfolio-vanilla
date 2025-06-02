const projecCardTemplate = document.createElement("template");
projecCardTemplate.innerHTML = `
    <link rel="stylesheet" href="/components/ProjectCard/ProjectCard.css">
     <li class="projects__card">
        <div class="card__img-container">
            <img   alt="" class="card__img">
        </div>
        <div class="card__content">
            <h3 class="card__title">Project 1</h3>
            <div class="card__container">
                <date class="card__date">2023</date>
                <slot name="skills"></slot>
            </div>
        <p class="card__description"><slot name="description"></slot></p>
        <a href="#" class="card__link">View Project</a>
     </li>
`;

class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.title = this.getAttribute("title") || "";
    this.src = this.getAttribute("src") || "";
    this.alt = this.getAttribute("alt") || "";
    this.href = this.getAttribute("href") || "";

    this.template = projecCardTemplate;
    this.cloneDom = this.template.content.cloneNode(true);
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.appendChild(this.cloneDom);
    let element = this.shadowRoot.querySelector(".card__title");
    let imgElement = this.shadowRoot.querySelector(".card__img");
    let altImgElement = this.shadowRoot.querySelector(".card__img");
    let hrefElement = this.shadowRoot.querySelector(".card__link");
    imgElement.src = this.src;
    element.innerText = this.title;
    altImgElement.alt = this.alt;
    hrefElement.href = this.href;
  }


//   attributeChangedCallback(name, oldValue, newValue) {
//     if (name === "title" && oldValue !== newValue) {
//       this.title = newValue;
//       this.render();
//     }
//   }

  static get observedAttributes() {
    return ["title", "src", "alt"];
  }
}

customElements.define("project-card", ProjectCard);

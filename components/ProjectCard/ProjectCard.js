import { PortfolioData, skillsI } from "../../assets/portfolio/portfolio.js";
const portfolioSection = document.querySelector(".projects__list");

const projectCardTemplate = ({
  title,
  imgSrc,
  desc,
  demoURL,
  repoURL,
  skillIcons,
}) => /*html*/ `

     <li class="projects__card">
        <div class="card__img-container">
            <img  src="${imgSrc}" alt="${title}" class="card__img">
        </div>
        <div class="card__content">
            <h3 class="card__title">${title}</h3>
            <div class="card__container">
                <ul>
                  ${skillIcons
                    .map((skill) => {
                      return /*html*/ `<li class="card__skill">
                        <iconify-icon icon="${skillsI[skill]}" class="card__skill-icon" with="30" height="30"/>
                      </li>`;
                    })
                    .join("")}
                </ul>
            </div>
        <p class="card__description">${desc}</p>
        <div class="card__buttons">
            <a href="${demoURL}" class="card__button card__button--demo" target="_blank">Demo</a>
            <a href="${repoURL}" class="card__button card__button--repo" target="_blank">Repo</a>
     </li>
     `;
let projects = PortfolioData.map((project, i) => {
  return projectCardTemplate({
    title: project.title,
    desc: project.desc,
    demoURL: project.demoURL || "#",
    repoURL: project.repoURL || "#",
    imgSrc: project.imgSrc || `https://picsum.photos/200/30${i}`,
    skillIcons: project.skill,
  });
});

portfolioSection.innerHTML = projects.join("");

import { data } from "./skillsData.js";
export const myFunctionExportingEvething = () => {
  const skillList = document.querySelector(".skills__list");

  const createSkillCard = data
    .map((skill) => {
      return `
        <li class="skills__items" id="card-skill">
            <div class="skills__icon">
                <iconify-icon
                class="iconify"
                icon="${skill.icon}" width="55" height="55">
                </iconify-icon>
            </div>
            <span class='skills__tag'>${skill.name}</span>
        </li>
    `;
    })
    .join("");

  skillList.innerHTML = createSkillCard;
};

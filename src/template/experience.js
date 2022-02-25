// acessar https://www.linkedin.com/in/rpradosilva/details/experience/

let experienceItems = document.querySelectorAll(
  ".pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested"
);

let myExperiencies = [];

for (const experience of experienceItems) {
  let jobLogo = experience.querySelector(
    ".ivm-image-view-model.pvs-entity__image img"
  ).src;

  let jobName, position, jobDuration, location;
  let experienceType = experience.querySelector(".pvs-entity__path-node");

  if (experienceType != null) {
    // mais de 1 cargo
    jobName = experience.querySelector(
      ".display-flex.flex-column.full-width.align-self-center .t-bold.mr1 span"
    ).textContent;
    position = experience.querySelector(
      "ul .pvs-list .display-flex.flex-column.full-width.align-self-center .t-bold.mr1 span"
    ).textContent;
    jobDuration = experience.querySelector(
      ".display-flex.flex-column.full-width.align-self-center .t-14.t-normal span"
    ).textContent;
    location = experience.querySelector(
      ".display-flex.flex-column.full-width.align-self-center .t-14.t-normal.t-black--light span"
    ).textContent;
  } else {
    // Apenas 1 cargo
    jobName = experience.querySelector(
      ".display-flex.flex-column.full-width.align-self-center .t-14.t-normal span"
    ).textContent;
    position = experience.querySelector(
      ".display-flex.flex-column.full-width.align-self-center .t-bold.mr1 span"
    ).textContent;
    jobDuration = experience.querySelector(
      ".display-flex.flex-column.full-width.align-self-center .t-14.t-normal.t-black--light span"
    ).textContent;
    location = experience.querySelector(
      ".display-flex.flex-column.full-width.align-self-center .t-14.t-normal.t-black--light+.t-14.t-normal.t-black--light span"
    ).textContent;
  }

  console.log(jobLogo, jobName, position, jobDuration, location);
  // myExperiencies.push({ jobLogo, jobName, position, jobDuration, location });
}

let myname, bio, lastJob, lastPosition, totalTimeJob;
let myExperiencies = [];

const resume = {
  myname,
  bio,
  myExperiencies,
  lastJob,
  lastPosition,
  totalTimeJob, //fazer
};

resume.myname = document.querySelector(".top-card-layout__title").textContent;
resume.bio = document.querySelector(
  ".core-section-container__content p"
).textContent;

let experiencies = document.querySelectorAll(".experience-item");

for (const experience of experiencies) {
  let jobLogo = experience.querySelector(
    ".profile-section-card__image-link img"
  ).src;
  let jobName = experience.querySelector(
    ".profile-section-card__subtitle a"
  ).textContent;
  let position = experience.querySelector(
    ".profile-section-card__title"
  ).textContent;
  let jobDuration;
  let location;

  if (experience.classList == "experience-group experience-item") {
    jobDuration = experience.querySelector(
      ".experience-group-header__duration"
    ).textContent;
    location = experience.querySelector(
      ".experience-group-position__location.experience-group-position__meta-item"
    ).textContent;
  } else {
    jobDuration = experience.querySelector(".date-range__duration").textContent;
    location = experience.querySelector(
      ".experience-item__location.experience-item__meta-item"
    ).textContent;
  }

  myExperiencies.push({ jobLogo, jobName, position, jobDuration, location });
}

resume.lastJob = resume.myExperiencies[0].jobName;
resume.lastPosition = resume.myExperiencies[0].position;

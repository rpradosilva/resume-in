(async () => {
  const response = await fetch("example.json");
  const data = await response.json();

  let myId = await createElement("p", ".container");
  myId.setAttribute("id", "myId");
  myId.innerHTML = data.id;

  let photo = await createElement("img", ".container");
  photo.setAttribute("src", data.personal.photo);
  photo.setAttribute("id", "personal-photo");

  let name = await createElement("p", ".container");
  name.setAttribute("id", "name");
  name.innerHTML = data.personal.name;

  let summary = await createElement("p", ".container");
  summary.setAttribute("id", "summary");
  summary.innerHTML = data.personal.summary;

  let state = await createElement("p", ".container");
  state.setAttribute("id", "state");
  state.innerHTML = data.personal.location.state;

  let country = await createElement("p", ".container");
  country.setAttribute("id", "country");
  country.innerHTML = data.personal.location.country;

  let email = await createElement("p", ".container");
  email.setAttribute("id", "email");
  email.innerHTML = data.personal.contact.email;

  let tel = await createElement("p", ".container");
  tel.setAttribute("id", "tel");
  tel.innerHTML = data.personal.contact.tel;

  let position = await createElement("p", ".container");
  position.setAttribute("id", "position");
  position.innerHTML = data.personal.position;

  await createElement("hr", ".container");

  for (const experience of data.experiences) {
    let jobId = await createElement("p", ".container");
    jobId.setAttribute("class", "jobId");
    jobId.innerHTML = experience.jobId;

    if (experience.logo != "") {
      let logo = await createElement("img", ".container");
      logo.setAttribute("src", experience.logo);
      logo.setAttribute("class", "experience-logo");
      logo.querySelectorAll(".experience-logo");
    }

    let company = await createElement("p", ".container");
    company.setAttribute("class", "experience-company");
    company.innerHTML = experience.company;

    let title = await createElement("p", ".container");
    title.setAttribute("class", "title");
    title.innerHTML = experience.title;

    let description = await createElement("p", ".container");
    description.setAttribute("class", "description");
    description.innerHTML = experience.description;

    let contract = await createElement("p", ".container");
    contract.setAttribute("class", "contract");
    contract.innerHTML = experience.contract;

    let location = await createElement("p", ".container");
    location.setAttribute("class", "location");
    location.innerHTML = experience.location;

    if (experience.isTheCurrentJob == true) {
      let duration = await createElement("p", ".container");
      duration.setAttribute("class", "duration");
      duration.innerHTML = `${experience.duration.startMonth}/${experience.duration.startYear} - isTheCurrentJob`;

      let isTheCurrentJob = await createElement("input", ".container");
      isTheCurrentJob.setAttribute("type", "checkbox");
      isTheCurrentJob.setAttribute("checked", "checked");
    } else {
      let duration = await createElement("p", ".container");
      duration.setAttribute("class", "duration");
      duration.innerHTML = `${experience.duration.startMonth}/${experience.duration.startYear} - ${experience.duration.endMonth}/${experience.duration.endYear}`;
    }

    await createElement("hr", ".container");
  }
})();

async function createElement(tag, parent) {
  let container = await document.querySelector(parent);
  let element = await document.createElement(tag);
  return container.appendChild(element);
}

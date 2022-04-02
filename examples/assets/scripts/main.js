(async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  personalData(data);
  experiencesData(data);
  educationData(data);
  certificationData(data);
})();

function createElement(tag, parent) {
  let container = document.querySelector(parent);
  let element = document.createElement(tag);
  return container.appendChild(element);
}

function createContainer(content, parent, id) {
  let container = createElement("div", `.${parent}`);
  container.setAttribute("class", `${content}-${id}`);
}

function personalData(data) {
  let personal = createElement("div", ".container");
  personal.setAttribute("class", "personal");

  let photo = createElement("img", ".personal");
  photo.setAttribute("src", data.personal.photo);

  let name = createElement("h1", ".personal");
  name.innerHTML = data.personal.name;

  let position = createElement("h2", ".personal");
  position.innerHTML = data.personal.position;

  let contact = createElement("div", ".personal");
  contact.setAttribute("class", "contact");

  let email = createElement("p", ".contact");
  email.innerHTML = data.personal.contact.email;

  let tel = createElement("p", ".contact");
  tel.innerHTML = data.personal.contact.tel;

  let summary = createElement("p", ".personal");
  summary.innerHTML = data.personal.summary;

  let location = createElement("div", ".personal");
  location.setAttribute("class", "location");

  let state = createElement("p", ".location");
  state.innerHTML = data.personal.location.state;

  let country = createElement("p", ".location");
  country.innerHTML = data.personal.location.country;

  let line = createElement("hr", ".personal");
}

function experiencesData(data) {
  if (data.experiences.length > 0) {
    let experiences = createElement("div", ".container");
    experiences.setAttribute("class", "experiences");

    let title = createElement("h1", ".experiences");
    title.innerHTML = "Experiences";

    for (const experience of data.experiences) {
      createContainer("job", "experiences", experience.jobId);

      if (experience.logo != "") {
        let logo = createElement("img", `.job-${experience.jobId}`);
        logo.setAttribute("src", experience.logo);
      }

      let jobDetails = createElement("div", `.job-${experience.jobId}`);
      jobDetails.setAttribute("class", `details-${experience.jobId}`);

      let company = createElement("h2", `.details-${experience.jobId}`);
      company.innerHTML = experience.company;

      let title = createElement("h3", `.details-${experience.jobId}`);
      title.innerHTML = experience.title;

      let description = createElement("p", `.details-${experience.jobId}`);
      description.innerHTML = experience.description;

      let contract = createElement("p", `.details-${experience.jobId}`);
      contract.innerHTML = experience.contract;

      let location = createElement("p", `.details-${experience.jobId}`);
      location.innerHTML = experience.location;

      let duration = createElement("span", `.details-${experience.jobId}`);

      let startMonth = experience.duration.startMonth;
      let startYear = experience.duration.startYear;
      let endMonth = experience.duration.endMonth;
      let endYear = experience.duration.endYear;

      if (startMonth <= 9) {
        startMonth = `0${experience.duration.startMonth}`;
      } else {
        startMonth = experience.duration.startMonth;
      }

      if (endMonth <= 9) {
        endMonth = `0${experience.duration.endMonth}`;
      } else {
        endMonth = experience.duration.endMonth;
      }

      if (experience.isTheCurrentJob == true) {
        duration.innerHTML = `${startMonth}/${startYear} - Current job`;
        duration.setAttribute("class", "current");
      } else {
        duration.innerHTML = `${startMonth}/${startYear} - ${endMonth}/${endYear}`;
      }
    }
  }
}

function educationData(data) {
  if (data.education.length > 0) {
    let education = createElement("div", ".container");
    education.setAttribute("class", "education");

    let title = createElement("h1", ".education");
    title.innerHTML = "Education";

    for (const education of data.education) {
      createContainer("school", "education", education.schoolId);

      if (education.logo != "") {
        let logo = createElement("img", `.school-${education.schoolId}`);
        logo.setAttribute("src", education.logo);
      }

      let schoolDetails = createElement("div", `.school-${education.schoolId}`);
      schoolDetails.setAttribute("class", `details-${education.schoolId}`);

      let school = createElement("h2", `.details-${education.schoolId}`);
      school.innerHTML = education.school;

      let degree = createElement("h3", `.details-${education.schoolId}`);
      degree.innerHTML = education.degree;

      let fieldsOfStudy = createElement(
        "span",
        `.details-${education.schoolId}`
      );
      fieldsOfStudy.innerHTML = education.fieldsOfStudy;

      let grade = createElement("p", `.details-${education.schoolId}`);
      grade.innerHTML = education.grade;

      let activities = createElement("p", `.details-${education.schoolId}`);
      activities.innerHTML = education.activities;

      let notes = createElement("p", `.details-${education.schoolId}`);
      notes.innerHTML = education.notes;

      let duration = createElement("p", `.details-${education.schoolId}`);
      duration.innerHTML = `${education.duration.startYear} - ${education.duration.endYear}`;
    }
  }
}

function certificationData(data) {
  if (data.certifications.length > 0) {
    let certifications = createElement("div", ".container");
    certifications.setAttribute("class", "certifications");

    let title = createElement("h1", ".certifications");
    title.innerHTML = "Certifications";

    for (const certification of data.certifications) {
      createContainer("certified", "certifications", certification.certifiedId);

      if (certification.logo != "") {
        let logo = createElement(
          "img",
          `.certified-${certification.certifiedId}`
        );
        logo.setAttribute("src", certification.logo);
      }

      let certifiedDetails = createElement(
        "div",
        `.certified-${certification.certifiedId}`
      );
      certifiedDetails.setAttribute(
        "class",
        `details-${certification.certifiedId}`
      );

      let certified = createElement(
        "h2",
        `.details-${certification.certifiedId}`
      );
      certified.innerHTML = certification.name;

      let company = createElement(
        "h3",
        `.details-${certification.certifiedId}`
      );
      company.innerHTML = certification.company;

      let license = createElement("p", `.details-${certification.certifiedId}`);
      license.innerHTML = certification.license;

      let notExpire = createElement(
        "span",
        `.details-${certification.certifiedId}`
      );

      if (certification.notExpire == true) {
        notExpire.innerHTML = "Not Expire";
      } else {
        notExpire.setAttribute("class", "expired");
        notExpire.innerHTML = `Expired in ${certification.duration.endYear}`;
      }
    }
  }
}

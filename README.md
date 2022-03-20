<br>
<div align="center">
    <img src=".github/logo.png" alt="Logo Repo" width="150">
    <h2>
        ResumeIn
    </h2>
    A scraping your LinkedIn to JSON
</div>
<br>
<div align="center">

[![About](https://img.shields.io/badge/-About-212121)](#about)
[![License](https://img.shields.io/badge/-License-212121)](/LICENSE)
[![Install](https://img.shields.io/badge/-Getting%20Started-006699)](#getting-started)

</div>

## About

It is a web application that scrapes your linkedin data to create a local database of your information to keep your portfolio up to date.

### Technologies

![nodeJS](https://img.shields.io/badge/-v16.14.0-ffffff?style=social&label=nodeJS)</br>![puppeteer](https://img.shields.io/github/package-json/dependency-version/rpradosilva/resume-in/puppeteer?style=social)</br>![readline-sync](https://img.shields.io/github/package-json/dependency-version/rpradosilva/resume-in/readline-sync?style=social)

### Features

- Scraping LinkedIn data
- Save data to JSON

> Follow our work [here](https://github.com/rpradosilva/resume-in/projects/1).

## Getting Started

### Prerequisites

- The [NodeJS](https://nodejs.org/) is **required** to be able to run this project.
- LinkedIn Account

### Installation

1. Clone repository

2. Install NPM Packages `npm i`

3. Run project `npm start`

4. Insert your **LinkedIn** credencials

> **Important:** Massive usage may lock your LinkedIn account or block your login with captcha.

### Usage

- The application generate a JSON file, you can use to:
  - Customize your portfolio with dynamic data
  - Generate resume

### Output file

To save your scrapped data, a JSON file is generated

JSON file structure:

> [See more about data structure](/.github/data-structure.md)

```json
{
  "id": "string",
  "personal": {
    "photo": "string",
    "name": "string",
    "summary": "string",
    "position": "string",
    "location": {
      "country": "string",
      "state": "string"
    },
    "contact": {
      "email": "string",
      "tel": "string"
    }
  },
  "experience": [
    {
      "jobId": "string",
      "company": "string",
      "logo": "string",
      "title": "string",
      "description": "string",
      "contract": "string",
      "location": "string",
      "duration": {
        "startMonth": "string",
        "startYear": "string",
        "endMonth": "string",
        "endYear": "string"
      },
      "isTheCurrentJob": true
    }
  ],
  "education": [
    {
      "schoolId": "string",
      "school": "string",
      "logo": "string",
      "degree": "string",
      "fieldsOfStudy": "string",
      "grade": "string",
      "activities": "string",
      "notes": "string",
      "duration": {
        "startMonth": "string",
        "startYear": "string",
        "endMonth": "string",
        "endYear": "string"
      }
    }
  ],
  "certifications": [
    {
      "certifiedId": "string",
      "name": "string",
      "company": "string",
      "logo": "string",
      "license": "string",
      "certifiedUrl": "string",
      "duration": {
        "startMonth": "string",
        "startYear": "string",
        "endMonth": "string",
        "endYear": "string"
      },
      "notExpire": true
    }
  ]
}
```

## License

This project is protected by the MIT license. See the file [LICENSE](/LICENSE) for more details.

---

### **Developed by** [<img alt="Logo RPrado" src="https://raw.githubusercontent.com/rpradosilva/rpradosilva/master/.github/logo-rprado.png" width="91px" />](http://rprado.design)

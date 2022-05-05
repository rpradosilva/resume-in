<br>
<div align="center">
    <img src=".github/default.svg" alt="Logo Repo" width="150">
    <h2>
        ResumeIn
    </h2>
    A scraping your LinkedIn data to JSON
</div>
<br>
<div align="center">

[![About](https://img.shields.io/badge/-About-212121)](#about)
[![License](https://img.shields.io/badge/-License-212121)](/LICENSE)
[![Install](https://img.shields.io/badge/-Getting%20Started-0A66C2)](#getting-started)

</div>

## About

It is a web application that scrapes your linkedin data to create a local database of your information to keep your portfolio up to date.

### Features

- Scraping LinkedIn data
- Save data to JSON
- Preview data

## Getting Started

### Prerequisites

- The [NodeJS](https://nodejs.org/) is **required** to be able to run this project.
- LinkedIn Account

### Usage

1. Clone repository

2. Install NPM Packages `npm i`

3. Run project `npm start`

4. Insert your **LinkedIn** credencials

> **Important:** Massive usage may lock your LinkedIn account or block your login with captcha.

### Visualize your data

After [extracting your data](#usage), a JSON file will be generated in the examples folder.

1. Go to the `examples` folder
2. Open `index.html` and run [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. You will be able to view your data

The application generate a JSON file, you can use to:

- Customize your portfolio with dynamic data
- Generate resume

> View data structure [here](./.github/data-structure.md)

### Dependencies

![nodeJS](https://img.shields.io/badge/-v16.14.0-ffffff?style=social&label=nodeJS)</br>![puppeteer](https://img.shields.io/github/package-json/dependency-version/rpradosilva/resume-in/puppeteer?style=social)</br>![readline-sync](https://img.shields.io/github/package-json/dependency-version/rpradosilva/resume-in/readline-sync?style=social)</br>![spinnies](https://img.shields.io/github/package-json/dependency-version/rpradosilva/resume-in/spinnies?style=social)

## License

This project is protected by the MIT license. See the file [LICENSE](/LICENSE) for more details.

---

[<img alt="Logo RPrado" src="https://avatars.githubusercontent.com/u/87092922" width="40" />](http://rprado.design)

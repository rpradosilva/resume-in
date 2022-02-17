# resume-in

A LinkedIn web scraping to custom resume

## Objetivo

Importar Informações do linkedin para construir portifolio dinâmico e deixá-lo atualizado.

## Riscos

É um Web Scraping, se mudar alguma estrutura de exibição, a aplicação quebra.

## Tecnologia

Javascript (node + puppeteer)

## To-do

- [x] [Carregar URL sem estar logado](#carregar-url-sem-estar-logado)
- [x] [Definir quais dados capturar](#definir-quais-dados-serão-capturados)
- [x] [Criar script para capturar os dados pelo DOM](#criar-script-para-capturar-os-dados-pelo-dom)
- [ ] [Sanitizar dados](#)
- [ ] [Criar robô com puppeteer](#)
- [ ] [Salvar dados em JSON](#)
- [ ] [Salvar JSON na máquina/servidor](#)

---

### Carregar URL sem estar logado

Atualmente identifiquei que a estrutura da url pública (sem login) funciona da seguinte forma:

- `https://br.linkedin.com/in/@dapessoa`

```javascript
"br."; // subdominio identificando país
"linkedin.com/in/"; // url padrão
"@pessoal"; // Seu perfil do linkedin
```

> Pessoas influencers conseguem ter o perfil www público

---

### Definir quais dados serão capturados

Abaixo seria a separacao dos dados e o que conseguimos capturar

- Nome
- Descricao
- Empresa atual = ultima exp profissional
- Cargo atual
  - ultima exp profissional
  - default = remoto
- Tempo de trabalho total = soma do tempo das exp
- Experiencias profissionais
  - Logo
  - Nome da empresa
  - Cargo
  - Localizacao

```javascript
const resume = {
  myname: "", // sanitizar
  bio: "",
  experience: [
    {
      jobLogo: "",
      jobName: "", // sanitizar
      position: "", // sanitizar
      jobDuration: "",
      location: "", // sanitizar
    },
  ],
  lastJob: "",
  lastPosition: "", // default: Remoto
  totalTimeJob: "",
};
```

### Criar script para capturar os dados pelo DOM

Arquivo aqui: [Link](/scriptDOM.js)

```javascript
// Nome do perfil (sanitizar nome)
document.querySelector(".top-card-layout__title").textContent;

// Bio
document.querySelector(".core-section-container__content p").textContent;
```

```javascript
// Experiencias profissionais (agrupamento de infos sobre cada experiencia)
var exp = document.querySelectorAll(".experience-item");
```

```javascript
// funciona para todos

// Logo da empresa individual
exp[0].querySelector(".profile-section-card__image-link img").src;

// Cargo na empresa individual (sanitizar)
exp[0].querySelector(".profile-section-card__title").textContent;

// Nome da empresa individual (sanitizar)
exp[0].querySelector(".profile-section-card__subtitle a").textContent;
```

```javascript
// Validacao das experiencias profissionais
exp[0].classList == "experience-group experience-item";

return true; // possui mais de 1 posicao dentro da empresa
return false; // não possui mais de uma posicao
```

```javascript
// Apenas para empresas que não possui mais de uma posicao

// Tempo na empresa individual
exp[0].querySelector(".date-range__duration").textContent;

// Local da empresa individual (sanitizar)
exp[0].querySelector(".experience-item__location.experience-item__meta-item")
  .textContent;
```

```javascript
// possuem mais de uma posicao

// Tempo na empresa individual (sanitizar
exp[0].querySelector(".experience-group-header__duration").textContent;

// Local da empresa individual (sanitizar)
exp[0].querySelector(
  ".experience-group-position__location.experience-group-position__meta-item"
).textContent;
```

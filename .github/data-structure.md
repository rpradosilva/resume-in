# Data Structure

## Personal

All data related to the personal profile:

> Profile link: `https://www.linkedin.com/in/user/`

> Edit profile link: `https://www.linkedin.com/in/user/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION` - need id

> Edit bio link: `https://www.linkedin.com/in/user/edit/forms/summary/new/?profileFormEntryPoint=PROFILE_SECTION` - need id

> Edit contact link: `https://www.linkedin.com/in/user/edit/contact-info/`

|       Status       | Category | Parameter   | Type     | Notes             |
| :----------------: | :------- | :---------- | :------- | :---------------- |
| :white_check_mark: | Personal | `id`        | _string_ | Edit profile link |
| :white_check_mark: | Personal | `firstName` | _string_ | Edit profile link |
| :white_check_mark: | Personal | `LastName`  | _string_ | Edit profile link |
| :white_check_mark: | Personal | `position`  | _string_ | Edit profile link |
| :white_check_mark: | Personal | `location`  | _object_ |                   |
| :white_check_mark: | Personal | `contry`    | _string_ | Edit profile link |
| :white_check_mark: | Personal | `state`     | _string_ | Edit profile link |
| :white_check_mark: | Personal | `contact`   | _object_ |                   |
| :white_check_mark: | Personal | `email`     | _string_ | Edit contact link |
| :white_check_mark: | Personal | `tel`       | _string_ | Edit contact link |
| :white_check_mark: | Personal | `summary`   | _string_ | Edit bio link     |
| :white_check_mark: | Personal | `photo`     | _string_ | Profile link      |

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
  }
}
```

## Experiences

All data relating to professional experiences:

> Edit job link: `https://www.linkedin.com/in/user/details/experience/edit/forms/{jobid}` - need profile id + job id

|       Status       | Category    | Parameter         | Type     | Notes         |
| :----------------: | :---------- | :---------------- | :------- | :------------ |
| :white_check_mark: | Experiences | `experience`      | _array_  |               |
| :white_check_mark: | Experiences | `jobId`           | _string_ | Edit job link |
| :white_check_mark: | Experiences | `company`         | _string_ | Edit job link |
| :white_check_mark: | Experiences | `title`           | _string_ | Edit job link |
| :white_check_mark: | Experiences | `duration`        | _object_ | Edit job link |
| :white_check_mark: | Experiences | `startMonth`      | _string_ | Edit job link |
| :white_check_mark: | Experiences | `startYear`       | _string_ | Edit job link |
| :white_check_mark: | Experiences | `endMonth`        | _string_ | Edit job link |
| :white_check_mark: | Experiences | `endYear`         | _string_ | Edit job link |
| :white_check_mark: | Experiences | `contract`        | _string_ | Edit job link |
| :white_check_mark: | Experiences | `location`        | _string_ | Edit job link |
| :white_check_mark: | Experiences | `logo`            | _string_ | Edit job link |
| :white_check_mark: | Experiences | `isTheCurrentJob` | _bolean_ | Edit job link |

```json
{
  "experience": [
    {
      "jobId": "string",
      "company": "string",
      "logo": "string",
      "title": "string",
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
  ]
}
```

## Education

All information related to education:

> Edit profile link: `https://www.linkedin.com/in/user/details/education/`

| Status | Category  | Parameter   | Type     | Notes      |
| :----: | :-------- | :---------- | :------- | ---------- |
|        | Education | `education` | _array_  |            |
|        | Education | `course`    | _string_ |            |
|        | Education | `logo`      | _string_ |            |
|        | Education | `type`      | _string_ | Level type |
|        | Education | `duration`  | _string_ |            |

```json
{
  "education": [
    {
      "course": "string",
      "logo": "string",
      "type": "string",
      "duration": "string"
    }
  ]
}
```

## Certificates and licenses

All information related to certificates and licenses:

> Edit profile link: `https://www.linkedin.com/in/user/details/certifications/`

| Status | Category     | Parameter     | Type     | Notes                                 |
| :----: | :----------- | :------------ | :------- | :------------------------------------ |
|        | Certificates | `certificate` | _array_  |                                       |
|        | Certificates | `company`     | _string_ |                                       |
|        | Certificates | `logo`        | _string_ |                                       |
|        | Certificates | `title`       | _string_ | Name of the certificate or licence    |
|        | Certificates | `published`   | _string_ | When certificate or licence published |
|        | Certificates | `expire`      | _string_ | When certificate or licence expire    |

```json
{
  "certificate": [
    {
      "company": "string",
      "logo": "string",
      "title": "string",
      "published": "string",
      "expire": "string"
    }
  ]
}
```

## Other informations

| Status | Category | Parameter  | Type     | Notes                           |
| :----: | :------- | :--------- | :------- | :------------------------------ |
|        | Other    | `other`    | _object_ |                                 |
|        | Other    | `workTime` | _string_ | Is the sum of all job durations |

```json
{
  "other": {
    "workTime": "string"
  }
}
```

## Full structure

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
      "duration": "string",
      "contract": "string",
      "location": {
        "state": "string",
        "contry": "string"
      }
    }
  ],
  "education": [
    {
      "course": "string",
      "logo": "string",
      "type": "string",
      "duration": "string"
    }
  ],
  "certificate": [
    {
      "company": "string",
      "logo": "string",
      "title": "string",
      "published": "string",
      "expire": "string"
    }
  ],
  "other": {
    "workTime": "string"
  }
}
```

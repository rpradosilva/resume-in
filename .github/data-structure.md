# Data Structure

## Personal

All data related to the personal profile:

> Profile link: `https://www.linkedin.com/in/user/`

> Edit profile link: `https://www.linkedin.com/in/user/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION` - need id

> Edit bio link: `https://www.linkedin.com/in/user/edit/forms/summary/new/?profileFormEntryPoint=PROFILE_SECTION` - need id

> Edit contact link: `https://www.linkedin.com/in/user/edit/contact-info/`

|       Status       | Category | Parameter  | Type     | Notes                                        |
| :----------------: | :------- | :--------- | :------- | :------------------------------------------- |
| :white_check_mark: | Personal | `id`       | _string_ | Edit profile link                            |
| :white_check_mark: | Personal | `personal` | _object_ |                                              |
| :white_check_mark: | Personal | `photo`    | _string_ | Profile link                                 |
| :white_check_mark: | Personal | `name`     | _string_ | Edit profile link (`firstName` + `LastName`) |
| :white_check_mark: | Personal | `summary`  | _string_ | Edit bio link                                |
| :white_check_mark: | Personal | `position` | _string_ | Edit profile link                            |
| :white_check_mark: | Personal | `location` | _object_ |                                              |
| :white_check_mark: | Personal | `contry`   | _string_ | Edit profile link                            |
| :white_check_mark: | Personal | `state`    | _string_ | Edit profile link                            |
| :white_check_mark: | Personal | `contact`  | _object_ |                                              |
| :white_check_mark: | Personal | `email`    | _string_ | Edit contact link                            |
| :white_check_mark: | Personal | `tel`      | _string_ | Edit contact link                            |

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
| :white_check_mark: | Experiences | `logo`            | _string_ | Edit job link |
| :white_check_mark: | Experiences | `title`           | _string_ | Edit job link |
| :white_check_mark: | Experiences | `description`     | _string_ | Edit job link |
| :white_check_mark: | Experiences | `contract`        | _string_ | Edit job link |
| :white_check_mark: | Experiences | `location`        | _string_ | Edit job link |
| :white_check_mark: | Experiences | `duration`        | _object_ |               |
| :white_check_mark: | Experiences | `startMonth`      | _string_ | Edit job link |
| :white_check_mark: | Experiences | `startYear`       | _string_ | Edit job link |
| :white_check_mark: | Experiences | `endMonth`        | _string_ | Edit job link |
| :white_check_mark: | Experiences | `endYear`         | _string_ | Edit job link |
| :white_check_mark: | Experiences | `isTheCurrentJob` | _bolean_ | Edit job link |

```json
{
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
  ]
}
```

## Education

All information related to education:

> Edit education link: `https://www.linkedin.com/in/user/details/education/` - need profile id + school id

|       Status       | Category  | Parameter       | Type     | Notes               |
| :----------------: | :-------- | :-------------- | :------- | ------------------- |
| :white_check_mark: | Education | `education`     | _array_  |                     |
| :white_check_mark: | Education | `schoolId`      | _string_ | Edit education link |
| :white_check_mark: | Education | `school`        | _string_ | Edit education link |
| :white_check_mark: | Education | `logo`          | _string_ | Edit education link |
| :white_check_mark: | Education | `degree`        | _string_ | Edit education link |
| :white_check_mark: | Education | `fieldsOfStudy` | _string_ | Edit education link |
| :white_check_mark: | Education | `grade`         | _string_ | Edit education link |
| :white_check_mark: | Education | `activities`    | _string_ | Edit education link |
| :white_check_mark: | Education | `notes`         | _string_ | Edit education link |
| :white_check_mark: | Education | `duration`      | _object_ |                     |
| :white_check_mark: | Education | `startMonth`    | _string_ | Edit education link |
| :white_check_mark: | Education | `startYear`     | _string_ | Edit education link |
| :white_check_mark: | Education | `endMonth`      | _string_ | Edit education link |
| :white_check_mark: | Education | `endYear`       | _string_ | Edit education link |

```json
{
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
  ]
}
```

## Certificates and licenses

All information related to certificates and licenses:

> Edit certified link: `https://www.linkedin.com/in/user/details/certifications/` - need profile id + certified id

|       Status       | Category     | Parameter      | Type     | Notes               |
| :----------------: | :----------- | :------------- | :------- | :------------------ |
| :white_check_mark: | Certificates | `certificate`  | _array_  |                     |
| :white_check_mark: | Certificates | `certifiedId`  | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `name`         | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `company`      | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `logo`         | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `licence`      | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `certifiedUrl` | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `duration`     | _object_ |                     |
| :white_check_mark: | Certificates | `startMonth`   | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `startYear`    | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `endMonth`     | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `endYear`      | _string_ | Edit certified link |
| :white_check_mark: | Certificates | `notExpire`    | _bolean_ | Edit certified link |

```json
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
```

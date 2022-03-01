# Data Structure

## Personal

All data related to the personal profile:

> Edit profile link: `https://www.linkedin.com/in/user/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION` - need id

> Edit bio link: `https://www.linkedin.com/in/user/edit/forms/summary/new/?profileFormEntryPoint=PROFILE_SECTION` - need id

> Edit contact link: `https://www.linkedin.com/in/user/edit/contact-info/`

|       Status       | Category | Parameter   | Type     | Notes                           |
| :----------------: | :------- | :---------- | :------- | :------------------------------ |
| :white_check_mark: | Personal | `firstName` | _string_ | Edit profile link               |
| :white_check_mark: | Personal | `LastName`  | _string_ | Edit profile link               |
| :white_check_mark: | Personal | `position`  | _string_ | Edit profile link               |
| :white_check_mark: | Personal | `location`  | _object_ | ---                             |
| :white_check_mark: | Personal | `contry`    | _string_ | Edit profile link               |
| :white_check_mark: | Personal | `state`     | _string_ | Edit profile link               |
| :white_check_mark: | Personal | `contact`   | _object_ | ---                             |
| :white_check_mark: | Personal | `email`     | _string_ | Edit contact link               |
| :white_check_mark: | Personal | `tel`       | _string_ | Edit contact link               |
| :white_check_mark: | Personal | `summary`   | _string_ | Edit bio link                   |
| :white_check_mark: | Personal | `photo`     | _string_ |                                 |
|                    | Personal | `workTime`  | _string_ | Is the sum of all job durations |

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

> Edit profile link: `https://www.linkedin.com/in/rpradosilva/details/experience/`

| Status | Category    | Parameter    | Type     | Notes                                        |
| :----: | :---------- | :----------- | :------- | :------------------------------------------- |
|        | Experiences | `experience` | _array_  | It can be just one job or more than one job. |
|        | Experiences | `company`    | _string_ |                                              |
|        | Experiences | `logo`       | _string_ | Image source                                 |
|        | Experiences | `title`      | _string_ |                                              |
|        | Experiences | `duration`   | _string_ |                                              |
|        | Experiences | `contract`   | _string_ | Type of employment contract                  |
|        | Experiences | `location`   | _object_ |                                              |
|        | Experiences | `state`      | _string_ |                                              |
|        | Experiences | `contry`     | _string_ |                                              |

```json
{
  "experience": [
    {
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
  ]
}
```

## Education

All information related to education:

| Category  | Parameter   | Type     | Notes                                                      |
| :-------- | :---------- | :------- | :--------------------------------------------------------- |
| Education | `education` | _array_  | https://www.linkedin.com/in/rpradosilva/details/education/ |
| Education | `course`    | _string_ |                                                            |
| Education | `logo`      | _string_ |                                                            |
| Education | `type`      | _string_ | Level type                                                 |
| Education | `duration`  | _string_ |                                                            |

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

| Category     | Parameter     | Type     | Notes                                                           |
| :----------- | :------------ | :------- | :-------------------------------------------------------------- |
| Certificates | `certificate` | _array_  | https://www.linkedin.com/in/rpradosilva/details/certifications/ |
| Certificates | `company`     | _string_ |                                                                 |
| Certificates | `logo`        | _string_ |                                                                 |
| Certificates | `title`       | _string_ | Name of the certificate or licence                              |
| Certificates | `published`   | _string_ | When certificate or licence published                           |
| Certificates | `expire`      | _string_ | When certificate or licence expire                              |

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

## Full structure

```json
{
  "name": "string",
  "photo": "string",
  "email": "string",
  "tel": "string",
  "bio": "string",
  "occupation": "string",
  "workTime": "string",
  "location": {
    "state": "string",
    "contry": "string"
  },
  "experience": [
    {
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
  ]
}
```

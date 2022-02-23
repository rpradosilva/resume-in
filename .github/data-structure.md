# Data Structure

## Personal

All data related to the personal profile:

| Category | Parameter    | Type     | Notes                                                         |
| :------- | :----------- | :------- | :------------------------------------------------------------ |
| Personal | `name`       | _string_ | https://www.linkedin.com/in/rpradosilva/overlay/contact-info/ |
| Personal | `photo`      | _string_ |                                                               |
| Personal | `email`      | _string_ | https://www.linkedin.com/in/rpradosilva/overlay/contact-info/ |
| Personal | `tel`        | _string_ | https://www.linkedin.com/in/rpradosilva/overlay/contact-info/ |
| Personal | `bio`        | _string_ |                                                               |
| Personal | `occupation` | _string_ | It's the same title in the last job                           |
| Personal | `workTime`   | _string_ | Is the sum of all job durations                               |
| Personal | `location`   | _object_ |                                                               |
| Personal | `state`      | _string_ |                                                               |
| Personal | `contry`     | _string_ |                                                               |

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
  }
}
```

## Experiences

All data relating to professional experiences:

| Category    | Parameter    | Type     | Notes                                                                                                    |
| :---------- | :----------- | :------- | :------------------------------------------------------------------------------------------------------- |
| Experiences | `experience` | _array_  | It can be just one job or more than one job. https://www.linkedin.com/in/rpradosilva/details/experience/ |
| Experiences | `company`    | _string_ |                                                                                                          |
| Experiences | `logo`       | _string_ | Image source                                                                                             |
| Experiences | `title`      | _string_ |                                                                                                          |
| Experiences | `duration`   | _string_ |                                                                                                          |
| Experiences | `contract`   | _string_ | Type of employment contract                                                                              |
| Experiences | `location`   | _object_ |                                                                                                          |
| Experiences | `state`      | _string_ |                                                                                                          |
| Experiences | `contry`     | _string_ |                                                                                                          |

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

# API Proxy Server

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [API References](#api-references)
- [API Routes](#api-routes)
- [License](#license)
- [Author Info](#author-info)

---

## Description

This is a API Proxy Server where all my other API keys are hidden

#### Technologies

- Node JS
- Express JS

[Back To The Top](#api-proxy-server)

---

## How To Use

The API Entry point is [API Proxy Server](https://backend-portfolio-proxy.herokuapp.com/api/v1)

Clone the project 

```bash
  git clone https://github.com/pras306/api-proxy.git
```

Go to the project directory

```bash
  cd api-proxy
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

---

## API References

- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Youtube API](https://developers.google.com/youtube/v3)
- [Clarifai API](https://www.clarifai.com/)
- [Unsplash API](https://unsplash.com/)


[Back To The Top](#api-proxy-server)

---

## API Routes

Production Base URL - [https://backend-portfolio-proxy.herokuapp.com/api/v1](https://backend-portfolio-proxy.herokuapp.com/api/v1)

#### GET images

```http
  GET /images/search/${term}
```

| Parameter   | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `term`      | `string` | **Required**. the search term of images to fetch  |


#### GET videos

```http
  GET /videos/search/${term}
```

| Parameter   | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `term`      | `string` | **Required**. the search term of videos to fetch  |


#### POST - Detect Face

```http
  POST /images/detect/face
```

|Request Body | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `term`      | `string` | **Required**. the URL of image to detect          |


#### POST - Find Closest Celebrity Match

```http
  POST /images/detect/celebrity
```

|Request Body | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `term`      | `string` | **Required**. the URL of image to detect          |


#### GET movies

```http
  GET /movies/${request}
```

| Parameter   | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `request    | `string` | **Required**. the genre of movies to fetch        |


---

## License

MIT License

Copyright (c) [2021] [Prasanna Sriram]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#api-proxy-server)

---

## Author Info

- Github - [pras306](https://github.com/pras306)
- LinkedIn - [Prasanna Sriram](https://www.linkedin.com/in/prasanna-sriram/)
- Portfolio - [Personal Portfolio](https://prasanna-sriram.netlify.app/)

[Back To The Top](#api-proxy-server)
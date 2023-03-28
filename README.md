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

The API Entry point is [API Proxy Server](https://api-proxy-server.up.railway.app/api/v1)

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

[Back To The Top](#api-proxy-server)

---

## API References

- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Youtube API](https://developers.google.com/youtube/v3)
- [Clarifai API](https://www.clarifai.com/)
- [Unsplash API](https://unsplash.com/)
- [Travel Advisor Rapid API](https://rapidapi.com/apidojo/api/travel-advisor/)
- [Open Weather Map Rapid API](https://rapidapi.com/community/api/open-weather-map/)
- [Coinranking Rapid API](https://rapidapi.com/Coinranking/api/coinranking1)
- [Bing News Search Rapid API](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1)


[Back To The Top](#api-proxy-server)

---

## API Routes

Production Base URL - [https://api-proxy-server-6xbe.onrender.com/api/v1](https://api-proxy-server-6xbe.onrender.com/api/v1)

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
| `request`    | `string` | **Required**. the genre of movies to fetch       |


#### GET place details

```http
  GET /traveladvisor/place?list_option=${list_option}&bl_latitude=${bl_latitude}&tr_latitude=${tr_latitude}&bl_longitude=${bl_longitude}&tr_longitude=${tr_longitude}
```

| Parameter        | Type     | Description                                                                         |
| :----------      | :------- | :---------------------------------------------------------------------------------- |
| `list_option`    | `string` | **Required**. can be one of three place type - Restaurants, Hotels and Attractions  |
| `bl_latitude`    | `number` | **Required**. latitude value of bottom left boundary in google maps                 |
| `tr_latitude`    | `number` | **Required**. latitude value of top right boundary in google maps                   |
| `bl_longitude`   | `number` | **Required**. longitude value of bottom left boundary in google maps                |
| `tr_longitude`   | `number` | **Required**. longitude value of top right boundary in google maps                  |


#### GET weather

```http
  GET /openweather/find?lat=${lat}&lng=${lng}
```

| Parameter   | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `lat`       | `number` | **Required**. the latitude value of the place     |
| `lng`       | `number` | **Required**. the longitude value of the place    |


[Back To The Top](#api-proxy-server)


#### GET coins

```http
  GET /coinranking/coins?limit=${limit}
```

| Parameter   | Type     | Description                                                  |
| :---------- | :------- | :----------------------------------------------------------- |
| `limit`     | `number` | **Required**. the limit for different crypto coins           |


[Back To The Top](#api-proxy-server)


#### GET coin

```http
  GET /coinranking/coin/${coinId}
```

| Parameter   | Type     | Description                                                  |
| :---------- | :------- | :----------------------------------------------------------- |
| `coinId`    | `number` | **Required**. the UUID of the coin you want to request       |


[Back To The Top](#api-proxy-server)


#### GET coin price history

```http
  GET /coinranking/coin/${coinId}/history?timePeriod=${timePeriod}
```

| Parameter    | Type     | Description                                                        |
| :----------  | :------- | :----------------------------------------------------------------- |
| `coinId`     | `number` | **Required**. the UUID of the coin you want to request             |
| `timePeriod` | `number` | **Required**. Timeperiod where the change and history are based on |


#### GET news search

```http
  GET /bingnewssearch/news/search?q=${searchTerm}&count=${count}
```

| Parameter     | Type     | Description                                                      |
| :-----------  | :------- | :--------------------------------------------------------------- |
| `searchTerm`  | `string` | **Required**. the query string for user's search                 |
| `count`       | `number` | **Required**. the number of news articles to return in search    |


[Back To The Top](#api-proxy-server)

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
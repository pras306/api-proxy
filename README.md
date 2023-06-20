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

The API Entry point is [API Proxy Server](https://api-proxy-server-6xbe.onrender.com/api/v1)

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
- [Coinranking Rapid API](https://rapidapi.com/Coinranking/api/coinranking1)
- [Bing News Search Rapid API](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1)
- [Stripe API](https://stripe.com/docs/api)
- [Spotify API](https://rapidapi.com/airaudoeduardo/api/spotify81)
- [Spotify Scraper API](https://rapidapi.com/DataFanatic/api/spotify-scraper)
- [Spotify API](https://rapidapi.com/Glavier/api/spotify23)
- [Cars API](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)


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


[Back To The Top](#api-proxy-server)


#### GET videos

```http
  GET /videos/search/${term}
```

| Parameter   | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `term`      | `string` | **Required**. the search term of videos to fetch  |


[Back To The Top](#api-proxy-server)


#### POST - Detect Face

```http
  POST /images/detect/face
```

|Request Body | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `term`      | `string` | **Required**. the URL of image to detect          |


[Back To The Top](#api-proxy-server)


#### POST - Find Closest Celebrity Match

```http
  POST /images/detect/celebrity
```

|Request Body | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `term`      | `string` | **Required**. the URL of image to detect          |


[Back To The Top](#api-proxy-server)


#### GET movies

```http
  GET /movies/${request}
```

| Parameter   | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `request`    | `string` | **Required**. the genre of movies to fetch       |


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

[Back To The Top](#api-proxy-server)


#### GET news search

```http
  GET /bingnewssearch/news/search?q=${searchTerm}&count=${count}
```

| Parameter     | Type     | Description                                                      |
| :-----------  | :------- | :--------------------------------------------------------------- |
| `searchTerm`  | `string` | **Required**. the query string for user's search                 |
| `count`       | `number` | **Required**. the number of news articles to return in search    |


[Back To The Top](#api-proxy-server)


#### POST - Create Stripe Payment Intent

```http
  POST /stripe/create-payment-intent
```

|Request Body | Type     | Description                                        |
| :---------- | :------- | :------------------------------------------------- |
| `cartItems` | `array`  | **Required**. an array of all the products in cart |


[Back To The Top](#api-proxy-server)


#### GET top Global tracks

```http
  GET /spotify/top_200_tracks/${date}
```

| Parameter     | Type     | Description                                                      |
| :-----------  | :------- | :--------------------------------------------------------------- |
| `date`        | `string` | **Required**. the last Thursday's date from current date         |


[Back To The Top](#api-proxy-server)


#### GET top tracks by Monthly Listeners

```http
  GET /spotify/top_20_by_monthly_listeners
```


[Back To The Top](#api-proxy-server)


#### GET top tracks by Followers

```http
  GET /spotify/top_20_by_followers
```


[Back To The Top](#api-proxy-server)


#### GET single track details

```http
  GET /spotify/tracks/${songId}
```

| Parameter     | Type     | Description                                                      |
| :-----------  | :------- | :--------------------------------------------------------------- |
| `songId`      | `string` | **Required**. Spotify ID of the required song                    |


[Back To The Top](#api-proxy-server)


#### GET single track's lyrics details

```http
  GET /spotify/track_lyrics/${songId}
```

| Parameter     | Type     | Description                                                      |
| :-----------  | :------- | :--------------------------------------------------------------- |
| `songId`      | `string` | **Required**. Spotify ID of the required song                    |


[Back To The Top](#api-proxy-server)


#### GET artist's overview details

```http
  GET /spotify/artist_overview/${artistId}
```

| Parameter     | Type     | Description                                                      |
| :-----------  | :------- | :--------------------------------------------------------------- |
| `artistId`    | `string` | **Required**. Spotify ID of the required artist                  |


[Back To The Top](#api-proxy-server)


#### GET top tracks by rank

```http
  GET /spotify/chart/tracks/top
```


[Back To The Top](#api-proxy-server)


#### GET top artists by rank

```http
  GET /spotify/chart/artists/top
```


[Back To The Top](#api-proxy-server)


#### GET all cars details


```http
  GET /cars/find?make=${manufacturer}&year=${year}&model=${model}&fuel=${fuel}&limit=${limit}
```

| Parameter     | Type     | Description                                                      |
| :-----------  | :------- | :--------------------------------------------------------------- |
| `manufacturer`| `string` | Name of the manufacturer of the car                              |
| `model`       | `string` | Name of the model of the car                                     |
| `year`        | `number` | Year when the car was manufactured                               |
| `fuel`        | `string` | Fuel type of the car                                             |
| `limit`       | `number` | Number of results to get in a single API call                    |


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
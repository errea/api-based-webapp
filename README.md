![](https://img.shields.io/badge/Microverse-blueviolet)

# JavaScript Capstone Project - Build WebApp API

In this capstone project we learnt how to build a web app that consumes an API using JavaScript to make websites dynamic and build basic single page apps. These also included learning and using ES6 syntax and modules, callbacks and promises. We also learned how to apply JavaScript best practices and language style guides in code. We used AAA pattern for unit tests.
Write units tests for a JavaScript app and make JavaScript code asynchronous.
Most importantly we performed a code review for each team member. [Find project specifications here](https://github.com/microverseinc/curriculum-javascript/blob/main/group-capstone/js_capstone.md)
      

<div align="center">

[![View Code](https://img.shields.io/badge/View%20-Code-green)](https://github.com/errea/api-based-webapp)
[![Github Issues](https://img.shields.io/badge/GitHub-Issues-orange)](https://github.com/errea/api-based-webapp/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/GitHub-Pull%20Requests-blue)](https://github.com/errea/api-based-webapp/pulls)

</div>

## Project description

This web app shows you some appealing action movies for you to like, see information about and drop some messages among your peers and people around the world! 

## Inner working

The application make API calls to the TVMAZE API retrieving information about the movies, such as name, picture and specific descriptions, like its type. Another API, Involvement API, is responsible for getting the number of likes, saving likes, getting list of comments and saving comments, which update in real-time using Vanilla JavaScript to update the DOM. All those functionalities is tied-up in a single codebase, that makes use of modern tools as Webpack, Jest for testing and ES6 arrow functions.

## Built with

- HTML
- CSS
- JavaScript
- VSCode
- Linters
- Async/Await
- Babel
- JSON
- DOM
- TVMAZE API
- Involvement API
- Jest testing
- Webpack
- Kanban for Git project organization 
- API Documentation
- [Webpack config](hhttps://webpack.js.org/guides/getting-started/)
- ES6 Modules 
- [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md)

![screenshot](./screenshot.png)


## Getting Started <a name = "gs"></a>
> To get a local copy up and running follow these simple example steps.

<details>
  <summary>Get instructions</summary>

```
$ cd <folder>
```

~~~bash
$ git clone https://github.com/errea/api-based-webapp.git
$ cd api-based-webapp
~~~

Run `npm install` to install the node modules and webpacker.

Run `npm run build` to build the bundler and build the webpack.

Run `npm run start` on a Terminal to start the server and look at the result in `http://localhost:8080/` in your browser.

</details>


## Information regarding the TVMAZE API

- For this exercise, a previous app was created in Insomnia
- This process yielded the id of `6XTY5c5cttB49FIPrzzY` which was hardcoded in the code

## API Information

### TVMAZE API

### Involvement API

- This application uses the [Involvement API service](https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270) provided by Microverse

- The base URL is `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/`

- It has basically 3 endpoints that were used, `/apps/` (to create the application), `/apps/:app_id/likes/` (to create and get likes) and `/apps/:app_id/comments` (To create and get comments)

#### New app

- To create a app, send a POST action to the base URL + `/apps/` without any parameter:

- The result will be the code for the further API calls: 

``` 
6XTY5c5cttB49FIPrzzY
``` 

#### Likes

- To create a new like, send a POST action to the base URL + `/apps/:app_id/likes/` (where :app_id is the previous id of the created game) and item identificator (we choose the id of the movie in TVMAZE API, to make the implementation easier):

```
{
  "item_id": 40995
}
```

- To get a list of all likes for all the items (movies), send a GET action to the base URL + `/apps/:app_id/likes/`:

- The response will be something like:

```
[
  {
    "likes": 18,
    "item_id": 40995
  }
]
``` 

#### Comments

- To create a new comment, send a POST action to the base URL + `/apps/:app_id/comments/` (where :app_id is the previous id of the created game) and item identificator (we choose the id of the movie in TVMAZE API, to make the implementation easier):

```
{
  "item_id": 40995,
  "username": "Arthur",
  "comment": "This was a great movie!"
}
```

Return value for POST action: `201` status (created)

- To get a list of all comments for all the items (movies), send a GET action to the base URL + `/apps/:app_id/comments/?item_id=item1`: (where item1 is 40995, the id of the movie)

- The response will be something like:

```
[
  {
    "comment": "This is nice!",
    "creation_date": "2021-01-10",
    "username": "Eri"
  },
  {
    "comment": "Great content!",
    "creation_date": "2021-02-10",
    "username": "Arthur"
  }
]
``` 

## ✒️  Authors <a name = "author"></a>

👤 **Eri**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)

👤 **Arthur Borges**

- GitHub: [@arthuborgesdev](https://github.com/arthurborgesdev)
- Twitter: [@arthurmoises](https://twitter.com/arthurmoises)
- LinkedIn: [Arthur Borges](https://linkedin.com/in/arthurmoises)

  
## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/errea/api-based-webapp/issues)
## 👍 Show your support

- Microverse: [@microverse](https://www.microverse.org/)

## Acknowledgments

- Microverse

## 📝 License

This project is MIT licensed.
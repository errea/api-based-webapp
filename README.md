![](https://img.shields.io/badge/Microverse-blueviolet)

# JavaScript Capstone Project - Build WebApp API

In this capstone project we  learnt how to build a web app API USING JavaScript to make websites dynamic and build basic single page apps. These also included learnign and using ES6 syntax and modules, callbacks and promises. We also learned how to apply JavaScript best practices and language style guides in code. We used AAA pattern for unit tests.
Write units tests for a JavaScript app and make JavaScript code synchronous.
Most importantly we Performed a code review for each team member. [Find project specifications here](https://github.com/microverseinc/curriculum-javascript/blob/main/group-capstone/js_capstone.md)
      

<div align="center">

[![View Code](https://img.shields.io/badge/View%20-Code-green)](https://github.com/errea/api-based-webapp)
[![Github Issues](https://img.shields.io/badge/GitHub-Issues-orange)](https://github.com/errea/api-based-webapp/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/GitHub-Pull%20Requests-blue)](https://github.com/errea/leader-board-project/pull/1)

</div>

## 📝 Contents

<p align="center">
<a href="#with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#gs">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#author">Author</a>
</p>

># [Project Description]
>The JavaScript capstone project is about building your own web application based on an external API. You will select an API that provides data about a topic that you like and then build the webapp around it. The webapp will have 2 or 3 user interfaces (depending on the size of your team):

># [Project Requirments]
>The JavaScript capstone project is about building your own web application based on an external API. You will select an API that provides data about a topic that you like and then build the webapp around it. The webapp will have 2 or 3 user interfaces (depending on the size of your team):

># [Project Documentation]
>The JavaScript capstone project is about building your own web application based on an external API. You will select an API that provides data about a topic that you like and then build the webapp around it. The webapp will have 2 or 3 user interfaces (depending on the size of your team):

># [Workload Distribution]
>We tackled the project using the Kanban git project approach and distributed tasks to the team members
## 🔧 Built with<a name = "with"></a>

- JavaScript
- HTML
- CSS
- JavaScript
- VSCode
- Linters
- Async/Await
- Babel
- JSON
- 
- DOM
- Kanban for Git project organisation 
- API Documentation
- [Webpack config](hhttps://webpack.js.org/guides/getting-started/)
- ES6 Modules 
- [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md)
  
># [Live Preview](https://determined-jennings-a4d5e7.netlify.app/)

![screenshot](./src/img/screen-shot.png)
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

Run `npm Install` to install the node modules and webpacker.

Run `npm run build` to build the bundler and build the webpack.

Run `npm start` or `npm watch` on a Terminal to start the server and look at the result in `http://localhost:8080/` in your browser.



## Set up
* Open your terminal and locate the folder you want to clone the repository and follow the steps above to install

</details>


## Info

- For this exercise, a previous game named "Matchmaking Stickman" was created in Insomnia
- This process yielded the id of `xxluFQBeRwbN9ctGU2td` which was hardcoded in the code

## API Information

- This application uses the [Leaderboard API service](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) provided by Microverse

- The base URL is `https://us-central1-js-capstone-backend.cloudfunctions.net/api/`

- It has basically 2 endpoints, `/games/` (to create games) and `/games/:id/scores/` (To create and get scores)

- To create a game, send a POST action to the base URL + `/games/` with the name of the game:

```
{
  "name": "This is the name of the new game" 
}
```

- The result will be something like: 
``` 
{
	"result": "Game with ID: Zl4d7IVkemOTTVg2fUdz added."
}
``` 

- To create a new score, send a POST action to the base URL + `/games/:id/scores/` (where id is the previous id of the created game) and the score and user name:

```
{
  "user": "Arthur"
  "score": 42 
}
```

- To get a list of all scores for a specific game, send a GET action to the base URL + `/games/:id/scores/`:

- The response will be something like:

```
{
  "result": [
    {
      "user": "John Doe",
      "score": 42
    },
    {
      "user": "Peter Parker",
      "score": 35
    },
    {
      "user": "Wonder Woman",
      "score": 50
    }
  ]
}
``` 

## Project Structure

    WebApp API
    ├── dist
    │   └── index.bundle.js
        └── index.html
    └── node_modules
    └── .github\workflows
        └── linters.yml
    └── src
        └── /img
      └── index.html
      └── index.js   
      └── style.css
    └── .eslintrc.json
    └── .gitignore
    └── .hintrc
    └──.stylelintrc.json
    └── MIT.md
    └── package-lock.json
    └── package.json
    └──README.md
    └── webpack.config.js

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

This project is [MIT](./MIT.md) licensed.


